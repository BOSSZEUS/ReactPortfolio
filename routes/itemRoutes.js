// const router = require('express').Router()
// const { Item } = require('../models')

// router.get('/items', (req, res) => {
//   Item.find()
//     .then(items => res.json(items))
//     .catch(e => console.error(e))
// })

// router.post('/items', (req, res) => {
//   Item.create(req.body)
//     .then(item => res.json(item))
//     .catch(e => console.error(e))
// })

// router.put('/items/:id', (req, res) => {
//   Item.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => res.sendStatus(200))
//     .catch(e => console.error(e))
// })

// router.delete('/items/:id', (req, res) => {
//   Item.findByIdAndDelete(req.params.id)
//     .then(() => res.sendStatus(200))
//     .catch(e => console.error(e))
// })

// module.exports = router