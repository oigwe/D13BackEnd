const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

const commentsRouter = require('./routes/comments');
const endorsementsRouter = require('./routes/endorsements');
const followersRouter = require('./routes/followers');
const newspapersRouter = require('./routes/newspapers');
const postsRouter = require('./routes/posts');
const tvShowsRouter = require('./routes/tvshows');
const userPreferenceRouter = require('./routes/userPreference');
const usersRouter = require('./routes/users');


// MIDDLEWARE NEEDED
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// routes
app.use('/comments', commentsRouter);
app.use('/endorsements', endorsementsRouter);
app.use('/followers', followersRouter);
app.use('/newspapers', newspapersRouter);
app.use('/posts', postsRouter);
app.use('/tvshows', tvShowsRouter);
app.use('/userPreference', userPreferenceRouter);
app.use('/users', usersRouter);



app.use((err, req, res, next) => {
  res.status(400).json({error: err.toString()});
});

app.listen(port, () => {
  console.log('D13 API is running on Port: '+port);
});


module.exports = {app,}