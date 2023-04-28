const UsersController = require('../controllers/users')

module.exports = (app) => {
    app.post('/usuario', UsersController.postUsers)
    app.get('/usuario', UsersController.getUsers)
    app.delete('/usuario/:id', UsersController.deleteUsers)
}