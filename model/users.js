const { Client } = require('pg');
const fs = require('fs');
const crypto = require('crypto');

//load user from userdb.json
const userInfo = JSON.parse(fs.readFileSync('./userdb.json', 'utf-8'));

//create postgresql client connection
const client = new Client({
    user: 'postgres', 
    host: 'localhost',
    database: 'userdb',
    password: 'postgres',
    port: 5432,
});

//connect to postgres
client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

// hash password function
function hashPassword(password) {
    return crypto.createHash('md5').update(password).digest('hex');
}

const hash = crypto.createHash('md5').update('alade').digest('hex');
console.log(hash);

exports.checkLoginDetailsDB = (username, password) => {
    const hashedPassword = hashPassword(password); // Hash the provided password

    // Query the logininfo table to check the user credentials
    return client.query('SELECT * FROM logininfo WHERE username = $1 AND userpassword = $2', [username, hashedPassword])
        .then(result => {
            if (result.rows.length > 0) {
                return true; // User found with matching credentials
            }
            return false; // No matching user
        })
        .catch(err => {
            console.error('Error executing query', err.stack);
            return false; // Error occurred
        });
};


exports.getUsers = () => {
    return userInfo;
}
exports.checkloginDetails = (username, password) => {
    var check = false;
    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].username == username && userInfo[i].password == password) {
            check = true;
        }
    }
    return check;
}