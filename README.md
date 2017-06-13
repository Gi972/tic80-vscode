# tic80-vscode 

This is a extension for running lua files in tic80  for mac (and windows soon but should be works with path configuration)


![vscodetic80](images/vscodetic80170.gif)

## Install

Install tic80-Vscode plug-in

Go in settings
in your user workspace
````
{
    "Tic80.executablePath": "/Applications/tic.app/Contents/MacOS/tic",
    "Tic80.executablePathCard": "/Users/YourUserName/Library/Application Support/TIC-80/0.27.1 dev"
}
````
!!! replace YourUserName by your real username.

* `Tic80.executablePath`: By default it is  "/Applications/tic.app/Contents/MacOS/tic"
if your executable is in Application. If not, get the path of your tic application

* `Tic80.executablePathCard`:
It is the folder where your cards with *.tic are  saved. If you want find it type "folder" in Tic80 application

* `Tic80.showNameInformation`: Actived by default for sure the plugin works, for a comfortable develop desactive it :-)

## Usage

Open tic, create a new cart and save it.
- Go in editor copy all code.
- Go in your vscode workspace create a file with the same name of your card with extension lua.
- Paste your code in file.
- Make your changes.
- Run tic with command Palette ="run tic80" or  cmd + R  

- don't forget:
     - when you save from vscode, the lua *.file is save but not the *.tic file.
     - when you save from tic80 application, the *.tic file it's save but not the *.lua file.   

## Requirements

Go to [tic80](https://tic.computer/) for tic application

## Known Issues

If Tic80 launch but you don't see sprites your `Tic80.executablePathCard` is no good.

No tested on Windows, but just configuration path the should be alright. 
more explication for configuration on windows soon.

Open a issue for questions


## Release Notes

- One instance when you start like the really tic80.
- You can trace in the console.
- Fix path file for windows

### 1.7.0
One Instance, and trace in console better for debbuging ;-)


### 1.0

Initial release of VsCodeTIC80 plug in.