const express = require('express');
const d13Router = express.Router();
const NewspaperService = require('../services/newspapers');

// POST - CREATE 
d13Router.post('/', (req, res, next) => {
  const {title} = req.body;

  NewspaperService.create(title)
    .then(data => {
      res.json({success: `The newspaper: ${title} has been created`});
    })
    .catch(err => {
      next(err);
    })
});

// GET - READ 
d13Router.get('/:title/', (req, res, next) => {
  const {title} = req.params;

  NewspaperService.read(title)
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
  const {title} = req.body;
  const {id} = req.params;

  NewspaperService.update(id, title)
    .then(data => {
      res.json({success: `Updated newspaper with ID ${id}`});
    })
    .catch(err => {
      next(err);
    })
});

// DELETE - DELETE
d13Router.delete('/:id/', (req, res, next) => {
  const {id} = req.params;

  NewspaperService.delete(id)
    .then(data => {
      res.json({success: `Newspaper ${id} has been removed from the database`});
    })
    .catch(err => {
      next(err);
    })
});


module.exports = d13Router;
