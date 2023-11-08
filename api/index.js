const express = require('express');

const app = express();

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register', (req,res) => {

});

app.listen(4040);

//mZvRGm0tJDnHlqP9