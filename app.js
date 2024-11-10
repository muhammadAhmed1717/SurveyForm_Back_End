const express = require("express");
const app = express();
const PORT = 5000
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