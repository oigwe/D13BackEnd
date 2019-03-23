const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/d13backend');

module.exports = {
    db,
}