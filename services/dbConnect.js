const pgp = require('pg-promise')({});
const db = pgp(process.env.DATABASE_URL || 'postgres://localhost/d13backend')

module.exports = {
    db,
}

/*
const pgp = require('pg-promise')

const getDbConn = (function(){
    let dbConn = null;

    return (dbAddr) => {
     console.log(pgp())
     if(!dbConn){
         dbConn = pgp({})(dbAddr)
     }
     return dbConn;
    }

 })();

 module.exports={getDbConn,}

 */