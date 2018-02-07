const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const isDev = require('electron-is-dev');

const debug = require('electron-debug');

debug({enabled: true});
if(isDev){
    debug({showDevTools: true});
}

let mainWindow;

function createWindow(cb){
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 1200,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        show: false,
        webPreferences: {
            plugins: true
        }
    });

    mainWindow.maximize();

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.setMenu(null);

    mainWindow.on('ready-to-show', function(){
        mainWindow.show();
    });

    mainWindow.on('closed', function(){
        mainWindow = null
    });
}

app.on('ready', createWindow);