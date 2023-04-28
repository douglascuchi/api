const db = require('../configs/pg')
const jwt = require('../configs/jwt')
const cript = require('../configs/crypto')

const sql_get =
` select users.username,
         users.salt,
         users.password
    from users
   where username = $1 `

const login = async (params) => {
    const {user, pass} = params
    result = await db.query(sql_get, [user])
    if (!result.rows) throw new Error("USUÁRIO NÃO EXISTE!")
    else {
        const salt = result.rows[0].salt
        const password = result.rows[0].password
        const hashedNewPass = cript.hashPassword(pass, salt)
        if (hashedNewPass == password) {
            let perfilAcesso = result.rows[0].username
            let token = jwt.sign({perfilAcesso})//, process.env.PRIVATE_AUTH, {algorithm: 'RS256', expiresIn: '7d'})
            return {
                status: 'Logado com sucesso!',
                user: result.rows[0].username,
                token: token
            }
        } else {
            throw { status: 400, type: 'WARN', message: `Senha inválida!`, detail: ''}
        }
    }
}

module.exports.login = login