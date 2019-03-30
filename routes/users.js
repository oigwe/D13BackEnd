const express = require('express');
const d13Router = express.Router();
const UpService = require('../services/users');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {email, nameofuser, username, title, borough, profileurl} = req.body;

  UpService.create(email, nameofuser, username, title, borough, profileurl)
    .then(data => {
      res.json({
        message:  `A profile for ${username} have been created`, 
        id: data.id
      });
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/:username/', (req, res, next) => {
  const {username} = req.params;

  UpService.read(username)
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
d13Router.put('/:id', (req, res, next) => {
  const {newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3} = req.body;
  const {id} = req.params;

  UpService.update(id, newstype_1, newstype_2, newstype_3, tvtype_1, tvtype_2, tvtype_3)
    .then(data => {
      res.json({success: `Updated preferences for user with ID ${id}`});
    })
    .catch(err => {
      next(err);
    })
});

// DELETE - DELETE
d13Router.delete('/:username/', (req, res, next) => {
  const {username} = req.params;

  UpService.delete(id)
    .then(data => {
      res.json({success: `User ${nameofuser} has been removed from the database`});
    })
    .catch(err => {
      next(err);
    })
});


module.exports = d13Router;
