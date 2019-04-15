const express = require('express');
const d13Router = express.Router();
const FollowersService = require('../services/followers');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {follower, followed} = req.body;

  FollowersService.create(follower, followed)
    .then(data => {
      res.json({success: `User ${follower} has followed user ${followed}`});
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/:userid/followed', (req, res, next) => {
  const {userid} = req.params;

  FollowersService.read(userid)
    .then(data => {
      res.json({
        'data': data
      });
    })
    .catch(err => {
      next(err);
    })
});

d13Router.get('/:userid/following', (req, res, next) => {
  const {userid} = req.params;

  FollowersService.readFollowed(userid)
    .then(data => {
      res.json({
        'data': data
      });
    })
    .catch(err => {
      next(err);
    })
});


// DELETE - DELETE
d13Router.delete('/:userid/', (req, res, next) => {
  const {userid} = req.params;
  const {followed} = req.body;

  FollowersService.delete(userid, followed)
    .then(data => {
      res.json({success: `User ${userid} has stopped following user: ${followed}`});
    })
    .catch(err => {
      next(err);
    })
});


module.exports = d13Router;
