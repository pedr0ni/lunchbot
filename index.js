const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

consign()
    .include('controllers')
    .into(app)

app.listen(3000, () => {
    console.log("Lunchbot server running at 3000")
})