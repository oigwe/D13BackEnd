const {app,} = require('./app')

app.listen(process.env.PORT || 9000, () => {
  console.log(`listening on port ${process.env.PORT || 5001}`)
})