const express = require('express');
const d13Router = express.Router();
const PostsService = require('../services/posts');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {userid, imageurl, caption} = req.body;

  PostsService.create(userid, imageurl, caption)
    .then(data => {
      res.json({success: `The post ${data.id} has been created`});
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/', (req, res, next) => {
  const {id} = req.query;

  PostsService.read(id)
    .then(data => {
      res.json({
        'data': data
      });
    })
    .catch(err => {
      next(err);
    })
});

d13Router.get('/:userid/all', (req, res, next) => {
    const {userid} = req.params;
  
    PostsService.readAll(userid)
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
  const {imageurl, caption} = req.body;
  const {id} = req.params;

  PostsService.update(id, imageurl, caption)
    .then(data => {
      res.json({success: `Updated comment with ID ${id}`});
    })
    .catch(err => {
      next(err);
    })
});

// DELETE - DELETE
d13Router.delete('/:id/', (req, res, next) => {
  const {id} = req.params;

  PostsService.delete(id)
    .then(data => {
      res.json({success: `Comment ${id} has been removed from the database`});
    })
    .catch(err => {
      next(err);
    })
});


module.exports = d13Router;
