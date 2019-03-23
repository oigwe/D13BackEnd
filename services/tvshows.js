const {db} = require('./dbConnect');
const TV = {};

TV.create = (title) => {
  const sql = `
  INSERT INTO tvShows (title)) VALUES 
  ($[title]) RETURNING id`;
  return db.one(sql, {title});
}

TV.read = (id) => {
  const sql = `SELECT * FROM tvShows WHERE title=$[title]`;
  return db.one(sql, {id});
}

/*TV.update = (title) => {
  const sql = `
  UPDATE tvShows
  SET
  title=$[title]
  WHERE
    id=$[id]
  `;
  return db.none(sql, {title});
}*/

TV.delete = (id) => {
  const sql = `
  DELETE FROM tvShows WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = TV;