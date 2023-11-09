const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  database: "students",
  host: "localhost",
  port: 3000,
  password: "Pranay&pooja1",
});

module.exports = pool;
