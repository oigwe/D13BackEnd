const {db} = require('./dbConnect');
const Endorsements = {};

Endorsements.create = (endorsing, endorsed) => {
  const sql = `
  INSERT INTO endorsements (endorsing, endorsed ) VALUES 
  ($[endorsing], $[endorsed]) RETURNING id;`;
  return db.one(sql, {endorsing, endorsed});
}

Endorsements.read = (endorsing) => {
  const sql = `SELECT * FROM endorsements WHERE endorsing=${endorsing}`;
  return db.any(sql, {endorsing});
}

/*Endorsements.update = (id, endorsing, endorsed) => {
  const sql = `
  UPDATE endorsements
  SET
    endorsing = $[endorsing], 
    endorsed = $[endorsed]
  WHERE
    id=$[id]
  `;
  return db.none(sql, {id, endorsing, endorsed});
}*/

Endorsements.delete = (id) => {
  const sql = `
  DELETE FROM endorsements WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = Endorsements;