const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "bapplapp",
    password : "password",
    port : 5432
});

module.exports = pool;