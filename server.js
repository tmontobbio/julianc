const PORT = 3000
const express = require('express')
const cors = require('cors')
const { default: axios } = require('axios')
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/api/gallery', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.pexels.com/v1/collections/6vfo6al?per_page=9&page=1`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.API_KEY
        }
    }
    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch(error => {
        console.error(error)
    })
})

app.get('/api/paginate', (req, res) => {
    let reqPage = req.query.page
    const options = {
        method: 'GET',
        url: `https://api.pexels.com/v1/collections/6vfo6al?per_page=3&page=${reqPage}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.API_KEY
        }
    }
    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch(error => {
        console.error(error)
    })
})

app.listen(3000, () => console.log(`Request on port ${PORT}`))