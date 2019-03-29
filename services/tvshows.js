const {db} = require('./dbConnect');
const tv = {};

tv.create = (userid, tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5) => {
  const sql = `
  INSERT INTO userpreferenceTV (userid, tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5) VALUES 
  ($[userId], $[tvtype_1], $[tvtype_2], $[tvtype_3], $[tvtype_4], $[tvtype_5]) RETURNING id;`;
  return db.one(sql, {userid, tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5});
}

tv.read = (userid) => {
  const sql = `SELECT * FROM userpreferenceTV WHERE userid=${userid}`;
  return db.one(sql, {userid});
}

tv.update = (userid, tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5) => {
  const sql = `
  UPDATE userpreferenceTV
  SET
    tvtype_1, = $[tvtype_1],
    tvtype_2 = $[tvtype_2], 
    tvtype_3 = $[tvtype_3], 
    tvtype_4 = $[tvtype_4], 
    tvtype_5 = $[tvtype_5]
  WHERE
    userid=$[userid]
  `;
  return db.none(sql, {userid, tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5});
}

tv.delete = (userid) => {
  const sql = `
  DELETE FROM userpreferenceTV WHERE userid=$[userid]
  `;
  return db.none(sql, {userid});
}


module.exports = tv;