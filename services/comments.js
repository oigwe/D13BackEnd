const {db} = require('./dbConnect');
const Comments = {};

Comments.create = (postid, userid, commenttext) => {
  const sql = `
  INSERT INTO comments (postid, userid, commenttext) VALUES 
  ($[postid], $[userid], $[commenttext]) RETURNING id`;
  return db.one(sql, {postid, userid, commenttext});
}

Comments.readUserComments = (postid) => {
  const sql = `SELECT * FROM comments JOIN users ON comments.userid = users.id WHERE postId=$[postid]`;
  return db.any(sql, {postid});
}

Comments.update = (id, postid, userid, commenttext) => {
  const sql = `
  UPDATE comments
  SET
    postId=$[postid],
    userId=$[userid],
    commentText=$[commenttext]
  WHERE
    id=$[id]
  `;
  return db.none(sql, {id, postid, userid, commenttext});
}

Comments.delete = (id) => {
  const sql = `
  DELETE FROM comments WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = Comments;