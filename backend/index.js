const express = require('express');
const app = express()
const cors = require('cors');
const dotenv = require('dotenv').config()
const port = process.env.PORT


app.get('/', (req,res) => {
    res.send('MetMed')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
