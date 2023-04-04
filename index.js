const PORT = 3000
const express = require('express')
const cors = require('cors')
const { default: axios } = require('axios')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/api/gallery', (req, res) => {
    const options = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': process.env.API_KEY
        }
    }

    axios.request(options).then((r) => {
        res.json(r.data)
    })
})

app.get('/api/paginate', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.pexels.com/v1/collections/6vfo6al?per_page=3&page=1`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.API_KEY
        }
    }

    axios.request(options).then((r) => {
        res.json(r.data)
    })
})

app.listen(3000, () => console.log(`Server is running on port ${PORT}`))