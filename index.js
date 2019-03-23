const {app,} = require('./app')
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log('D13 API is running on Port: '+port);
});