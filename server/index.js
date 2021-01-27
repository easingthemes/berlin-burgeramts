// require fs package to read files
const path = require('path');
const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd() + '/public/index.html'));
})

app.listen(port, () => console.log(`Server started on port ${port}`))
