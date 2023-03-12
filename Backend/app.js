const express = require('express')
const mongoose = require('mongoose')

const PORT = 3000
const app = express()


mongoose.connect('mongodb://root:root1234@localhost:27017/VocalTix?authSource=admin').then(() => {
    app.listen(PORT, () => {
        console.log('listening on port 3000')
    })
})

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Page Loaded'
    })
})