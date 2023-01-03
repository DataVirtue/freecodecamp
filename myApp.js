let express = require('express');
let app = express();

app.use('/', (req, res) => {
    res.send("hello world");
    console.log("Hello World");
})





































module.exports = app;
