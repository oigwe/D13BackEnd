const {db} = require('./dbConnect');
const topics = {};

topics.create = (userid, topic_1, topic_2, topic_3, topic_4, topic_5) => {
  const sql = `
  INSERT INTO userpreferenceTopics (userid, topic_1, topic_2, topic_3, topic_4, topic_5) VALUES 
  ($[userid], $[topic_1], $[topic_2], $[topic_3], $[topic_4], $[topic_5]) RETURNING id;`;
  return db.one(sql, {userid, topic_1, topic_2, topic_3, topic_4, topic_5});
}

topics.read = (userid) => {
  const sql = `SELECT * FROM userpreferenceTopics WHERE userid=${userid}`;
  return db.one(sql, {userid});
}

topics.update = (userid, newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3) => {
  const sql = `
  UPDATE userpreferenceTopics
  SET
    topic_1, = $[topic_2],
    topic_2 = $[topic_2], 
    topic_3 = $[topic_3], 
    topic_4 = $[topic_4], 
    topic_5 = $[topic_5]
  WHERE
    userid=$[userid]
  `;
  return db.none(sql, {userid, newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3});
}

topics.delete = (id) => {
  const sql = `
  DELETE FROM userpreferenceTopics WHERE userid=$[userid]
  `;
  return db.none(sql, {userid});
}


module.exports = topics;