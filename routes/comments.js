const express = require('express');
const d13Router = express.Router();
const CommentService = require('../services/comments');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {postid, userid, commenttext} = req.body;

  CommentService.create(postid, userid, commenttext)
    .then(data => {
      res.json({success: `Created comment for user ${userid} with generated ID: ${data.id}`});
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/:id/', (req, res, next) => {
  const {id} = req.params;

  CommentService.readUserComments(id)
    .then(data => {
      res.json({
        "data": data,
      /*"items": [
       {"id": {
         "comment": data[0].id,
         "post": data[0].postid
        },
        "snippet": {
         "publishedAt": data[0].createdat,
         "text": data[0].commenttext,
         "user": data[0].nameofuser,
         "thumbnail": {
           "url": data[0].profileurl
         }
        }
       }
      ]*/
    });
    })
    .catch(err => {
      next(err);
    })
});

// PUT - UPDATE
d13Router.put('/:id', (req, res, next) => {
  const {postid, userid, commenttext} = req.body;
  const {id} = req.params;

  CommentService.update(id, postid, userid, commenttext)
    .then(data => {
      res.json({success: `Updated comment with ID ${id} with comment: ${commenttext}`});
    })
    .catch(err => {
      next(err);
    })
});

// DELETE - DELETE
d13Router.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  CommentService.delete(id)
    .then(data => {
      res.json({success: `Deleted comment with ID: ${id}`});
    })
    .catch(err => {
      next(err);
    })
});

module.exports = d13Router;
