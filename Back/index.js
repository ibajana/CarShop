const express = require('express');
const app = express();

const engine = require('ejs-locals');



app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/dist', (req, res) => {
    res.render('dist/index.ejs');
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))