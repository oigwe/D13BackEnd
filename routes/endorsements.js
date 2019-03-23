const express = require('express');
const d13Router = express.Router();
const EndorsementsService = require('../services/endorsements');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {endorsing, endorsed} = req.body;

  EndorsementsService.create(endorsing, endorsed)
    .then(data => {
      res.json({success: `User ${endorsing} has endorsed user ${endorsed}`});
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/:id/', (req, res, next) => {
  const {id} = req.params;

  EndorsementsService.read(id)
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
/*d13Router.put('/:id', (req, res, next) => {
  const {endorsing, endorsed} = req.body;
  const {id} = req.params;

  EndorsementsService.update(id, endorsing, endorsed)
    .then(data => {
      res.json({success: `Updated endorsement with ID ${id}`});
    })
    .catch(err => {
      next(err);
    })
});*/

// DELETE - DELETE
d13Router.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  EndorsementsService.delete(id)
    .then(data => {
      res.json({success: `Deleted endorsement with ID: ${id}`});
    })
    .catch(err => {
      next(err);
    })
});


module.exports = d13Router;
