(function(){
    const electronScreen = require('electron').screen
    const size = electronScreen.getPrimaryDisplay().size
    const os = require('os')

    const cpu = os.cpus()
    const freememory = os.freemem()/1024/1024/1024
    const totalmemory = os.totalmem()/1024/1024/1024

    const network = os.networkInterfaces()

    const sysInfoBtn = document.getElementById('hard-info')

    sysInfoBtn.addEventListener('click', function () {
        const message = `CPU型号: ${cpu[0].model}`+`，`
            + `CPU速度(Mhz)： ${cpu[0].speed}`+`<br>`
            + `内存大小(GB)： ${totalmemory.toFixed(2)}`+`，`
            + `可用内存(GB)：${freememory.toFixed(2)}`+`<br>`
            + `本地ip：${network.lo[0].address}`+`<br>`
            + `当前屏幕是: ${size.width}px x ${size.height}px`

        document.getElementById('got-hard-info').innerHTML = message
    })
})();