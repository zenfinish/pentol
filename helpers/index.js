const crypto = require('crypto');

module.exports = {
    encryptpassword(password) {
        return hashed = crypto.createHmac('sha256', 'asaaaal').update(password).digest('hex')
    }
}