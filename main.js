const {app, BrowserWindow} = require('electron');
const path = require('path');
const glob = require('glob');
//electron模块包含了Electron提供的所有API和功能
// 初始化并准备创建主窗口

var win=null;

function initialize () {
    var shouldQuit = makeSingleInstance()
    if (shouldQuit) return app.quit()

    loadDemos()

    function createWindow() {
        // 创建浏览器窗口。

        win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        })

        // 然后加载应用的 index.html。
        win.loadFile('dev-release/index.html')

        win.on('closed', function () {
            win = null
        })
    }

    app.on('ready', function () {
    createWindow()
    })

    app.on('activate', function () {
    if (win === null) {
        createWindow()
       }
     })
}

function makeSingleInstance () {
    if (process.mas) return false

    return app.makeSingleInstance(function () {
        if (win) {
            if (win.isMinimized()) win.restore()
            win.focus()
        }
    })
}


function loadDemos () {
    var files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
    files.forEach(function (file) {
        require(file)
    })
}

switch (process.argv[1]) {
    case '--squirrel-install':
        autoUpdater.createShortcut(function () { app.quit() })
        break
    case '--squirrel-uninstall':
        autoUpdater.removeShortcut(function () { app.quit() })
        break
    case '--squirrel-obsolete':
    case '--squirrel-updated':
        app.quit()
        break
    default:
        initialize()
}