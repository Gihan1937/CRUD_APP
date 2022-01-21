const Pool = require("pg").Pool;

const pool = new Pool({
    user: "gihansenanayake",
    password: "Sasankasena1937",
    host: "localhost",
    port: 8080,
    database: "study"
});

module.exports = pool;

