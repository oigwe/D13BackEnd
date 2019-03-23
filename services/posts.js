const {db} = require('./dbConnect');
const Posts = {};

Posts.create = (userid, imageurl, caption, numberofcomments) => {
  const sql = `
  INSERT INTO posts (userId, imageUrl, caption, numberOfComments) VALUES 
  ($[userId], $[imageUrl], $[caption], $[numberOfComments]) RETURNING id`;
  return db.one(sql, {userid, imageurl, caption, numberofcomments});
}

Posts.read = (id) => {
    const sql = `SELECT * FROM posts WHERE id=$[id]`;
    return db.any(sql, {id});
}

Posts.readAll = (userid) => {
  const sql = `SELECT * FROM posts WHERE userid=$[userid]`;
  return db.any(sql, {userid});
}


Posts.update = (userid, imageurl, caption, numberofcomments) => {
  const sql = `
  UPDATE posts
  SET
    userId = $[userId], 
    imageUrl = $[userId], 
    caption = $[caption], 
    numberOfComments = $[numberOfComments]
  WHERE
    postId=$[id]
  `;
  return db.none(sql, {userid, imageurl, caption, numberofcomments});
}

Posts.delete = (id) => {
  const sql = `
  DELETE FROM posts WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = Posts;