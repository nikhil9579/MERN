const express = require('express');
const app = express();
const model = require('./model/model');
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

const connection = require("./db");
const userRouter = require("./routs/userdatarouter");


app.use("/api/", userRouter);


app.listen(3000,() =>{
    console.log("server starded listening on port " );
})
