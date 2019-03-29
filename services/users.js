const {db} = require('./dbConnect');
const Users = {};

Users.create = (email, nameofuser, username, title, borough, profileurl) => {
  const sql = `
  INSERT INTO users (email, nameofuser, username, title, profileurl, borough) VALUES 
  ($[email], $[nameofuser], $[username], $[title], $[borough], $[profileurl]) RETURNING id;`;
  return db.one(sql, {email, nameofuser, username, title, borough, profileurl});
}

Users.read = (nameofuser) => {
  const sql = `SELECT * FROM users WHERE nameofuser=$[nameofuser]`;
  return db.one(sql, {nameofuser});
}

Users.update = (id, email, nameofuser, username, title, borough, profileurl) => {
  const sql = `
  UPDATE users
  SET
    email=$[email],
    nameOfUser=$[nameOfUser],
    username=$[username],
    title=$[title],
    borough=$[borough]
    profileUrl=$[profileUrl],
  WHERE
    id=$[id]
  `;
  return db.none(sql, {id, email, nameofuser, username, title, borough, profileurl});
}

Users.delete = (id) => {
  const sql = `
  DELETE FROM users WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = Users;