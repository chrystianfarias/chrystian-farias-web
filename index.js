const express = require('express')
const app = express()
const port = process.env.PORT | 3000
const path = require('path');

app.get('/hello', (req, res) => {
  res.send('Hello! :)')
})
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
})
app.get('*', (req, res)=> {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})