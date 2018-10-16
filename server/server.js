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

app.post(`/api/auth/register`, (req, res) => {
    const {username, password} = req.body

    if (username) {
        req.app.get('db').check_user([username])
        .then((user) => {
            console.log(username, user)
            if (user.length !== 0 ){
                console.log(`Username unavalible`)
            } else {
                req.app.get('db').create_user([username, password])
                .then((user) => {
                    req.session.userId = user[0].id
                    res.sendStatus(200)
                })
                .catch((err) => {
                    res.status(500).send(err)
                })
            }
        })
    } else {
        res.sendStatus(400)
    }

})

app.post('/api/auth/login', (req, res) => {
    const {username, password} = req.body

    req.app.get('db').login([usernmae, password])
    .then((user) => {
        req.session.userId = user[0].id
        res.sendStatus(200);
    })
})

app.get(`/api/houser/getInfo`, (req,res)=>{
    const db = req.app.get('db')
    db.get_properties([req.body])
    .then(resp=>{
        res.status(200).send(resp)
    })
    .catch(console.log)
})

app.delete(`/api/houser/delete/:id`, (req, res) =>{
    let {id} = req.params
    const db = req.app.get('db')
    db.delete_property([id])
    .then(resp=>{
        res.status(200).send(resp)
    })
    .catch(console.log)
})

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`listening on port ${process.env.SERVER_PORT}`)
});