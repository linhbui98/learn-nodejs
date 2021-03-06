const express = require("express")
const router = express.Router()

const db = require('../db')
const controller = require('../controllers/user.controllers')
const validate = require('../validate/user.validate')

router.get('/', controller.index)

router.get('/search', controller.search)

router.get('/create', controller.create) 

router.get('/:id', controller.get)

router.post('/create', validate.postCreate, controller.postCreate)

module.exports = router
