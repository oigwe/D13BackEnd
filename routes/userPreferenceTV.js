const express = require('express');
const d13Router = express.Router();
const UpServiceTV = require('../services/tvshows');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {userid, tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5} = req.body;

  UpServiceTV.create(userid, tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5)
    .then(data => {
      res.json({success: `TV Preferences for user ${userid} have been created`});
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/', (req, res, next) => {
  const {id} = req.query;

  UpServiceTV.read(id)
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
  const {tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5} = req.body;
  const {userid} = req.params;

  UpServiceTV.update(tvtype_1, tvtype_2, tvtype_3, tvtype_4, tvtype_5)
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

  UpServiceTV.delete(id)
    .then(data => {
      res.json({success: `TV Preferences for ${userid} have been removed from the database`});
    })
    .catch(err => {
      next(err);
    })
});


module.exports = d13Router;
