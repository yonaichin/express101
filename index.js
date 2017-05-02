const express = require('express')

const app = express();


console.log('__dirname', __dirname)

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/api/hello' , (req, res) => {
  res.status(200).json({
    hello: 'world'
  })
})

app.listen(3000, () => {
  console.log('app is running on http://localhost:3000')
})

