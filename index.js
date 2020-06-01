require('dotenv').config()
const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    db = require('./db'),
    cors = require('cors'),
    http = require('http')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/r9s', async (req, res, next) => {

    try {
        const r9s = await db.R9.find()

    } catch (err) {
        console.log(err)
    }

    const filteredR9s = r9s.filter(r => r.approved === true)
    res.status(200).json(filteredR9s)
})

app.get('/r9s/:id', async (req, res, next) => {
    const r9 = await db.R9.findById(req.params.id)

    res.status(200).json(r9)
})

app.put('/r9s/:id', async (req, res, next) => {
    await db.R9.findByIdAndUpdate(req.params.id, req.body)
    const r9 = await db.R9.findById(req.params.id)
    res.status(200).json(r9)
})

app.post('/r9s', async (req, res, next) => {
    const allR9s = await db.R9.find()
    const allR9Names = allR9s.map(r => r.name)

    if (!allR9Names.includes(req.body.name)) {
        const newR9 = await db.R9.create(req.body)
        res.status(200).json(newR9)
    } else {
        res.status(400).json({ message: 'Already a restaurant' })
    }
})

//server
http.createServer(app).listen(port, () => {
    console.log('App is running on port ' + port)
})