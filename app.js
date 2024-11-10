const express = require("express");
const app = express();
const PORT = 5000
require('./database');
const bodyParser = require('body-parser');
const ApiRoute = require("./routes/index.js");
const cors = require('cors');
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your app's domain or whitelist specific domains
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, authtoken"
    );
    next();
});
app.use("/api", ApiRoute);
const start = () => {
    try{
        app.listen(PORT, () => {
            console.log(`${PORT} connected`);
        })
    } catch (error) {
        console.log("Error in Connecting Port: ", error)
    }
}
start()