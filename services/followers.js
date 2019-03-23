const {db} = require('./dbConnect');
const Followers = {};

Followers.create = (follower, followed) => {
  const sql = `
  INSERT INTO followers (follower, followed)) VALUES 
  ($[follower], $[followed]) RETURNING id`;
  return db.one(sql, {follower, followed});
}

Followers.read = (follower) => {
  const sql = `SELECT * FROM followers WHERE follower=$[follower]`;
  return db.any(sql, {follower})
}

/*Followers.getFollowing = (follower) => {
  const sql = `SELECT * FROM followers WHERE followed=${followed}`;
  return db.any(sql, {followed});
}

Followers.getFollowers = (follower) => {
  const sql = `SELECT * FROM followers WHERE followed=${follower}`;
  return db.any(sql, {follower});
}*/

/*Followers.update = (personFollowingId,personBeingFollowed) => {
  const sql = `
  UPDATE followers
  SET
    email=$[email],
    nameOfUser=$[nameOfUser],
    username=$[username],
    title=$[title],
    profileUrl=$[profileUrl]
  WHERE
    id=$[id]
  `;
  return db.none(sql, {personFollowingId,personBeingFollowed});
}*/

Followers.delete = (follower, followed) => {
  const sql = `
  DELETE FROM followers WHERE follower=$[follower] AND followed = $[followed]
  `;
  return db.none(sql, {follower, followed});
}


module.exports = Followers;