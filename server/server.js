require('dotenv').config()
const express = require('express')
const dotenv = require('dotenv')
const massive = require('massive')
const bodyParser = require('body-parser')
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

// Database //
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use(express.static(__dirname+'../build'))
app.use(bodyParser.json())


app.listen(process.env.SERVER_PORT, () =>{
    console.log(`listening on port ${process.env.SERVER_PORT}`)
});