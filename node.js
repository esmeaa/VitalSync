const crypto = require('crypto');

var plain_password = 'Testing';

var hash_md5 = crypto.createHash('md5').update(plain_password).digest('hex');

console.log('Md5 hash value - ', hash_md5);