const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require("body-parser");
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
app.use(cors(corsOptions)) 
app.use(bodyParser.json());


//database connection
const uri = "mongodb://localhost:27017/traveldetails"
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


app.use('/', routes)



app.listen(process.env.PORT || 3001, ()=> {
    console.log(`SERVER IS RUNNING on ${process.env.PORT || 3001}`);
}); 