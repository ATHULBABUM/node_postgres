const express = require('express');
// const chalk = require('chalk');
var bodyparser = require('body-parser');
var cors = require('cors'); 

var app = new express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

const port = process.env.PORT|| 3001;
const userRoutes = require("./src/users/routes");

app.get('/', (req,res)=> {
    res.send('I am lucky, connected to port: '+ port);
});

app.use("/api/allUsers", userRoutes )

app.listen(port, ()=>{
    // console.log(chalk.green('server started at: ' + port));
    console.log('server started at: ' + port);
});
