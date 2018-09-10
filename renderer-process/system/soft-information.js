(function(){
    const os = require('os')
    const ipc = require('electron').ipcRenderer

    const type = os.type()
    const homeDir = os.homedir()
    const host =os.hostname()
    const sysInfoBtn = document.getElementById('soft-info')
    const electronVersion = process.versions.electron

    sysInfoBtn.addEventListener('click', function () {
        ipc.send('get-app-path')
        ipc.on('got-app-path', function (event, path) {
            const message  = `操作系统类型: ${type}` + `<br>`
                + `主机名：${host}`+ `<br>`
                + `当前系统主目录是: ${homeDir}`+ `<br>`
                + `electron版本：${electronVersion}`+ `<br>`
                + `当前应用程序位于: ${path}`
            document.getElementById('got-soft-info').innerHTML = message
        })

    })
})();
