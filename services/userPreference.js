const {db} = require('./dbConnect');
const userPreference = {};

userPreference.create = (userid, newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3) => {
  const sql = `
  INSERT INTO userPreference (userId, newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3) VALUES 
  ($[userId], $[newstype_1], $[newstype_2], $[newstype_3], $[tvtype_1], $[tvtype_2], $[tvtype_3]) RETURNING id;`;
  return db.one(sql, {userid, newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3});
}

userPreference.read = (userid) => {
  const sql = `SELECT * FROM userPreference WHERE userid=${userid}`;
  return db.one(sql, {userid});
}

userPreference.update = (userid, newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3) => {
  const sql = `
  UPDATE userPreference
  SET
    newstype_1, = $[newtype_1],
    newstype_2 = $[newstype_2], 
    newstype_3 = $[newstype_3], 
    tvtype_1 = $[tvtype_1], 
    tvtype_2 = $[tvtype_2], 
    tvtype_3 = $[tvtype_3],
  WHERE
    userid=$[userid]
  `;
  return db.none(sql, {userid, newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3});
}

userPreference.delete = (id) => {
  const sql = `
  DELETE FROM userPreference WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = userPreference;