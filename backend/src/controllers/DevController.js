const axios = require('axios')
const DevModel = require('../models/DevModel')

module.exports = {
    async mostrar(req, res) {
        const { user } = req.headers

        const loggedDev = await DevModel.findById(user)

        const usersRegistered = await DevModel.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ],
        })

        return res.json(usersRegistered)
    },

    async criar(req, res) {
        const { username } = req.body

        const userExiste = await DevModel.findOne({user : username})
        if(userExiste) {
            return res.json(userExiste)
        }

        const resposta = await axios.get(`https://api.github.com/users/${username}`)
        
        const { name, bio, avatar_url: avatar } = resposta.data

        //Tratamento de Erro
        if(name === null) {
            return res.status(400).json({ erro: 'Usuario não contem nome no GitHub' })
        }

        const dev = await DevModel.create({ 
            name,
            user: username,
            bio,
            avatar
         })

        return res.json(dev)
    }
}