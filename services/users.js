const {db} = require('./dbConnect');
const Users = {};

Users.create = (email, nameofuser, username, title, profileurl, zipcode, firebaseUID) => {
  const sql = `
  INSERT INTO users (email, nameofuser, username, title, profileurl, zipcode, firebaseUID) VALUES 
  ($[email], $[nameofuser], $[username], $[title], $[profileurl], $[zipcode], $[firebaseUID]) RETURNING id;`;
  return db.one(sql, {email, nameofuser, username, title, profileurl, zipcode, firebaseUID});
}

Users.read = (email) => {
  const sql = `SELECT * FROM users WHERE email=$[email]`;
  return db.one(sql, {email});
}

Users.update = (id, email, nameofuser, username, title, zipcode, profileurl) => {
  const sql = `
  UPDATE users
    SET email=$[email],
    nameofuser = $[nameofuser],
    username=$[username],
    title=$[title],
    zipcode=$[zipcode]
    profileUrl=$[profileUrl],
  WHERE
    id=$[id]
  `;
  return db.none(sql, {id, email, nameofuser, username, title, zipcode, profileurl});
}

Users.delete = (id) => {
  const sql = `
  DELETE FROM users WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = Users;