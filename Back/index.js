const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World not gay 3001');
});


app.listen(3001, () => console.log('Example app listening on port 3000!'))