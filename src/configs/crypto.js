const crypto = require('crypto')

function generateSalt() {
    return crypto.randomBytes(16).toString('hex')
}

function hashPassword(Pass, salt){
    return crypto.pbkdf2Sync(Pass, salt, 1000, 64, 'sha512').toString('hex')
}

module.exports.hashPassword = hashPassword
module.exports.generateSalt = generateSalt