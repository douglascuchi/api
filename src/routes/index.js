const Aluno = require('./aluno')
const User = require('./users')
const Login = require('./login')

module.exports = (app) => {
    Aluno(app)
    User(app)
    Login(app)
}