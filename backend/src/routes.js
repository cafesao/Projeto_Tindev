//Dependencia
const express = require('express')

const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikesController = require('./controllers/DislikeController')

const routes = express.Router()

routes.get('/devs', DevController.mostrar)
routes.post('/devs', DevController.criar)

routes.post('/devs/:devId/likes', LikeController.criar)
routes.post('/devs/:devId/dislikes', DislikesController.criar)

module.exports = routes