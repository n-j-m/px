'use strict'
const http = require('http')
const express = require('express')
const app = express()

app.get('/api/pics', (req, res) => {
  http.get('http://jsonplaceholder.typicode.com/photos', (r) => {
    let data = ''
    r.on('data', chunk => data += chunk.toString())
      .on('end', () => {
        const pics = JSON.parse(data)
        res.json(pics.splice(0, 100))
      })
      .on('err', err => res.status(500).json(err))
  }).on('error', (err) => {
    res.status(500).json(err)
  })
})

app.get('/api/pics/:id', (req, res) => {
  http.get(`http://jsonplaceholder.typicode.com/photos/${req.params.id}`, (r) => r.pipe(res))
    .on('error', (err) => res.status(500).json(err))
})

module.exports = app