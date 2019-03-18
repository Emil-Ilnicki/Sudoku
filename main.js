const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

let menuWindow
let gameWindow


// Listen for app to be ready
app.on('ready', function(){

    // Create the menu window
    menuWindow = new BrowserWindow({});

    menuWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'menuWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

// Catch item:gamemode
ipcMain.on('item:gamemode', function(e, item){
    if (item === "easy"){
        createEasyGame();
    }

    if (item === "medium"){
        createMediumGame();
    }

    if (item === "hard"){
         createHardGame();
    }
    
});

// Easy Game (3x3 grid)
function createEasyGame(){

    gameWindow = new BrowserWindow({});

    gameWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'easy.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    menuWindow.close();
}

// Medium Game (6x6 grid)
function createMediumGame(){

    gameWindow = new BrowserWindow({});

    gameWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'medium.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    menuWindow.close();
}

// Hard Game (9x9 grid)
function createHardGame(){

    gameWindow = new BrowserWindow({});

    gameWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'hard.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    menuWindow.close();
}


const mainMenuTemplate = [
    {
        // Delete this later 
        label: "Developer Tools",
        submenu:[
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == "darwin" ? 'Command+I' : "Ctrl+I",
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    }
]
