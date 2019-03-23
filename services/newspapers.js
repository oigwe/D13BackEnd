const {db} = require('./dbConnect');
const Newspapers = {};

Newspapers.create = (title) => {
  const sql = `
  INSERT INTO newspapers (title) VALUES 
  ($[title]) RETURNING id`;
  return db.one(sql, {title});
}

Newspapers.read = (title) => {
  const sql = `SELECT * FROM newspapers WHERE title=$[title]`;
  return db.one(sql, {title});
}

Newspapers.update = (id, title) => {
  const sql = `
  UPDATE newspapers
  SET
  title=$[title]
  WHERE
    id=$[id]
  `;
  return db.none(sql, {id, title});
}

Newspapers.delete = (id) => {
  const sql = `
  DELETE FROM newspapers WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = Newspapers;