import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Smart HTML Comment Toggle extension is now active!');

    let disposable = vscode.commands.registerCommand('html-comment-toggle.toggle', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        // 获取选中的文本
        const selectedText = document.getText(selection);
        if (!selectedText.trim()) {
            vscode.window.showWarningMessage('请先选择要切换注释的代码块');
            return;
        }

        // 检查是否整个文本被注释包围
        const trimmedText = selectedText.trim();
        const isWrappedInComments = trimmedText.startsWith('<!--') && trimmedText.endsWith('-->');

        let newText: string;

        if (isWrappedInComments) {
            // 选中代码有注释包围，取消注释
            newText = unwrapComments(selectedText);
        } else {
            // 选中代码没有注释包围，添加注释
            newText = wrapWithComments(selectedText);
        }

        // 应用更改
        editor.edit(editBuilder => {
            editBuilder.replace(selection, newText);
        });
    });

    context.subscriptions.push(disposable);
}




function wrapWithComments(text: string): string {
    // 添加注释，并将内部注释从 <!-- 转换为 <!-*
    // 将内部注释从 <!-- 转换为 <!-*
    const processedContent = text.replace(/<!--/g, '<!-*').replace(/-->/g, '*->');

    return `<!-- ${processedContent} -->`;
}

function unwrapComments(text: string): string {
    // 取消注释，并将内部注释从 <!-* 转换为 <!--
    const trimmedText = text.trim();
    if (trimmedText.startsWith('<!--') && trimmedText.endsWith('-->')) {
        // 移除外层注释，去掉前后空格
        const innerContent = trimmedText.slice(4, -3).trim();
        // 将内部注释从 <!-* 转换为 <!--
        const processedContent = innerContent.replace(/<!-\*/g, '<!--').replace(/\*->/g, '-->');
        return processedContent;
    }
    return text;
}


export function deactivate() { }