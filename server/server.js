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

app.post('/api/houser/create', (req,res)=>{
    let { propName, propDesc, addressInput, cityInput, stateInput, zipInput, urlInput, loanInput, mortgageInput, rentInput} = req.body
    const db = req.app.get('db')
    db.create_properties([propName, propDesc, addressInput, cityInput, stateInput, zipInput, urlInput, loanInput, mortgageInput, rentInput])
    .then(resp=>{
        res.status(200).send(resp)
    })
    .catch(console.log)
})

app.get(`/api/houser/getInfo`, (req,res)=>{
    const db = req.app.get('db')
    db.get_properties([req.body])
    .then(resp=>{
        res.status(200).send(resp[0])
    })
    .catch(console.log)
})


app.listen(process.env.SERVER_PORT, () =>{
    console.log(`listening on port ${process.env.SERVER_PORT}`)
});