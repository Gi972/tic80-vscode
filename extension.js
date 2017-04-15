// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var cp = require('child_process');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated

    let tic80Setup = vscode.workspace.getConfiguration('Tic80');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerTextEditorCommand('extension.runTic', function (textEditor) {
        // The code you place here will be executed every time your command is executed
   
    textEditor.document.save()
    let fileName = textEditor.document.fileName;

    var cartNameSplit = fileName.split('/');
    var cartName= cartNameSplit[cartNameSplit.length-1].split('.')[0];

    var args=[`${tic80Setup['executablePathCard']}/${cartName}.tic`,"-code", fileName]
    cp.execFile(tic80Setup['executablePath'],args);

        // Display a message box to the user
        
        if(tic80Setup['showNameInformation'])
            vscode.window.showInformationMessage(`rom tic80 you launch ${ cartName }.tic`);

    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;