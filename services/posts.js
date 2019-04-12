const {db} = require('./dbConnect');
const Posts = {};

Posts.create = (userid, imageurl, caption) => {
  const sql = `
  INSERT INTO posts (userid, imageurl, caption) VALUES 
  ($[userid], $[imageurl], $[caption]) RETURNING id`;
  return db.one(sql, {userid, imageurl, caption});
}

Posts.read = (id) => {
    const sql = `SELECT * FROM posts WHERE id=$[id]`;
    return db.any(sql, {id});
}

Posts.readAll = (userid) => {
  const sql = `SELECT * FROM posts JOIN users ON posts.userid = $[userid] `;
  return db.any(sql, {userid});
}

Posts.update = (userid, imageurl, caption ) => {
  const sql = `
  UPDATE posts
  SET
    userid = $[userid], 
    imageurl = $[userid], 
    caption = $[caption], 
  WHERE
    postid=$[id]
  `;
  return db.none(sql, {userid, imageurl, caption});
}

Posts.delete = (id) => {
  const sql = `
  DELETE FROM posts WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = Posts;