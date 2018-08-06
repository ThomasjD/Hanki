var express = require('express')
var app = express()

//path for static files
app.use('/static', express.static(__direname + '/dev/public'))
//view engine
app.set('view engine', 'pug')
//setting the views directory
app.set('views', __dirname + '/src/views')

app.get('*', function(req, res){
  res.render('index')
})

app.listen(3000, function({
  console.log('listening on port 3000')
}))
