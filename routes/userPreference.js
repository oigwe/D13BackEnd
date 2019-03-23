const express = require('express');
const d13Router = express.Router();
const UpService = require('../services/newspapers');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {userid, topic_1, topic_2, topic_3, tvtype_1, tvtype_2, tvtype_3} = req.body;

  UpService.create(userid, topic_1, topic_2, topic_3, tvtype_1, tvtype_2, tvtype_3)
    .then(data => {
      res.json({success: `Preferences for user ${userid} have been created`});
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/:userid/', (req, res, next) => {
  const {id} = req.params;

  UpService.read(id)
    .then(data => {
      res.json({
        'data': data
      });
    })
    .catch(err => {
      next(err);
    })
});


// PUT - UPDATE
d13Router.put('/:userid', (req, res, next) => {
  const {topic_1, topic_2, topic_3, tvtype_1, tvtype_2, tvtype_3} = req.body;
  const {userid} = req.params;

  UpService.update(topic_1, topic_2, topic_3, tvtype_1, tvtype_2, tvtype_3)
    .then(data => {
      res.json({success: `Updated preferences for user with ID ${id}`});
    })
    .catch(err => {
      next(err);
    })
});

// DELETE - DELETE
d13Router.delete('/:userid/', (req, res, next) => {
  const {userid} = req.params;

  UpService.delete(id)
    .then(data => {
      res.json({success: `Preferences for ${userid} have been removed from the database`});
    })
    .catch(err => {
      next(err);
    })
});


module.exports = d13Router;
