const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

const app = express()

app.use(bodyParser.json())
consign()
    .include('controllers')
    .into(app)

app.listen(3000, () => {
    console.log("Lunchbot server running at 3000")
})