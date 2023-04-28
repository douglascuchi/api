const db = require('../configs/pg')
const crypto = require('../configs/crypto')

const sqlInsert =
    `insert into users (username, salt, password)
     values ($1, $2, $3)`

const sql_get =
    `select id,
            username,
            salt, 
            password
    from users`

const sql_delete = `delete from users where id = $1`

const postUsers = async (params) => {
    const {user, password} = params
    criarUsuario(user, password)
}

function criarUsuario (usuario, senha) {
    const saltUser = crypto.generateSalt()
    const HassPassUser = crypto.hashPassword(senha, saltUser)
    db.query(sqlInsert, [usuario, saltUser, HassPassUser])
}

const getUsers = async () => {
    let users = {}
    await db.query(sql_get)
        .then(ret => users = {total: ret.rows.length, alunos: ret.rows } )
        .catch(err => users = err.stack )
    return users
}

const deleteUsers = async (params) => {
    await db.query(sql_delete, [params.id])
}

module.exports.postUsers = postUsers
module.exports.getUsers = getUsers
module.exports.deleteUsers = deleteUsers
