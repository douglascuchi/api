const crypto = require('./crypto')

const user = 'Douglas'
const password = '123'

const storePassword = '90b21bef78e4695e3fc05a0a46ddecd66ab0eb45e1d7a15d2242d6a7a27dcf8a17bbfe0fe5697e3943dbc9501e62d91443fec0daa8384ff28895ba151a2b35db'
const salt = '73cfe19a14f76be87268183dd6de8990'

function comparePassword (storePassword, salt, providedPassword){
    const hash = crypto.hashPassword(providedPassword, salt)
    return hash === storePassword
}

console.log(comparePassword(storePassword, salt, password))