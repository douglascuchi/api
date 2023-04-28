const UsersService = require('../services/users')

const postUsers = async (req, res, next) => {
    try {
        const retorno = await UsersService.postUsers(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
    } catch (err) {
        res.status(500).send(err)
    }
}

const getUsers = async (req, res, next) => {
    try {
        await UsersService.getUsers()
        .then (ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        await UsersService.deleteUsers(req.params)
        .then (ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports.postUsers = postUsers
module.exports.getUsers = getUsers
module.exports.deleteUsers = deleteUsers