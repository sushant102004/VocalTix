const express = require('express')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Page Loaded'
    })
})

app.listen(PORT, () => {
    console.log('listening on port 3000')
})