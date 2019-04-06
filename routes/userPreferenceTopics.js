const express = require('express');
const d13Router = express.Router();
const UpServiceTopics = require('../services/topics');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {userid, topic_1, topic_2, topic_3, topic_4, topic_5} = req.body;

  UpServiceTopics.create(userid, topic_1, topic_2, topic_3, topic_4, topic_5)
    .then(data => {
      res.json({success: `Topic Preferences for user ${userid} have been created`});
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/', (req, res, next) => {
  const {userid} = req.query;

  UpServiceTopics.read(userid)
    .then(data => {
      res.json({
        'data': [data.topic_1, data.topic_2, data.topic_3, data.topic_4, data.topic_5]
      });
    })
    .catch(err => {
      next(err);
    })
});


// PUT - UPDATE
d13Router.put('/:userid', (req, res, next) => {
  const {topic_1, topic_2, topic_3, topic_4, topic_5} = req.body;
  const {userid} = req.params;

  UpServiceTopics.update(userid, topic_1, topic_2, topic_3, topic_4, topic_5)
    .then(data => {
      res.json({success: `Updated topic preferences for user with ID ${id}`});
    })
    .catch(err => {
      next(err);
    })
});

// DELETE - DELETE
d13Router.delete('/:userid/', (req, res, next) => {
  const {userid} = req.params;

  UpServiceTopics.delete(id)
    .then(data => {
      res.json({success: `Topic Preferences for ${userid} have been removed from the database`});
    })
    .catch(err => {
      next(err);
    })
});


module.exports = d13Router;
