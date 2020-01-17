// 轮询 服务端
let express = require('express')
let app = express()
app.use(express.static(__dirname))
app.get('/clock', function(req, res) {
    setInterval(function() {
        let date = new Date().toLocaleString()
        res.write(`
            <script>
                parent.document.getElementById('clock').innerHTML = "${date}" //改变父窗口dom元素
            </script>
        `)
    }, 1000)
})
app.listen(3000)