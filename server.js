const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const mongoose = require('mongoose');

var mongoDB='mongodb://localhost:27017/FirstREST';

mongoose.Promise=global.Promise;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


var port =process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("REST API TEST with POSTMAN");
})

require('./routes/note.routes.js')(app);
app.listen(port);