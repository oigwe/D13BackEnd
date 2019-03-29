const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const admin = require('./firebase')
const cors = require('cors')


const commentsRouter = require('./routes/comments');
const endorsementsRouter = require('./routes/endorsements');
const followersRouter = require('./routes/followers');
const newspapersRouter = require('./routes/newspapers');
const postsRouter = require('./routes/posts');
const tvShowsRouter = require('./routes/tvshows');
const userPreferenceTopicsRouter = require('./routes/userPreferenceTopics');
const userPreferenceTVRouter = require('./routes/userPreferenceTV');
const usersRouter = require('./routes/users');

app.use(cors());


// MIDDLEWARE NEEDED
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//WHAT DO I DO WITH THIS
const checkFirebaseToken = (req, res, next) => {
  const {token} = req.body
  admin.auth().verifyIdToken(token)
.then(function(decodedToken) {
  var uid = decodedToken.uid;
  //req.uid = decodedToken.uid
  next();
  // ...
}).catch(function(error) {
  // Handle error
  res.json('ERROR')
});
}

// routes
app.use('/comments', commentsRouter);
app.use('/endorsements', endorsementsRouter);
app.use('/followers', followersRouter);
app.use('/newspapers', newspapersRouter);
app.use('/posts', postsRouter);
app.use('/tvshows', tvShowsRouter);
app.use('/tv', userPreferenceTVRouter);
app.use('/topics', userPreferenceTopicsRouter);
app.use('/users', usersRouter);



app.use((err, req, res, next) => {
  res.status(400).json({error: err.toString()});
});

/*app.listen(port, () => {
  console.log('D13 API is running on Port: '+port);
});*/


module.exports = {app,}