const express = require('express');
const app = express();

const engine = require('ejs-locals');

app.use('/',express.static(__dirname + '/public'))

app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');




app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/first', (req, res) => {
    res.render('index.ejs');
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))