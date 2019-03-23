const {db} = require('./dbConnect');
const Users = {};

Users.create = (email, nameofuser, username, title, profileurl) => {
  const sql = `
  INSERT INTO users (email, nameOfUser, username, title, profileUrl, borough) VALUES 
  ($[email], $[nameOfUser], $[username], $[title], $[profileUrl], $[borough]) RETURNING id;`;
  return db.one(sql, {email, nameofuser, username, title, profileurl});
}

Users.read = (nameofuser) => {
  const sql = `SELECT * FROM users WHERE nameofuser=$[nameofuser]`;
  return db.one(sql, {nameofuser});
}

Users.update = (id, email, nameofuser, username, title, profileurl) => {
  const sql = `
  UPDATE users
  SET
    email=$[email],
    nameOfUser=$[nameOfUser],
    username=$[username],
    title=$[title],
    profileUrl=$[profileUrl],
    borough=$[borough]
  WHERE
    id=$[id]
  `;
  return db.none(sql, {id, email, nameofuser, username, title, profileurl});
}

Users.delete = (id) => {
  const sql = `
  DELETE FROM users WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = Users;