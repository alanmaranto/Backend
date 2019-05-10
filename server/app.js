const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const propiedades = require('./routers/propiedades');
const port = 8082;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/", express.static(path.join(__dirname, '../public')));
app.use('/api/v1/', propiedades);

app.listen(port, () => {
    console.log("Listening at port " + port);
});
