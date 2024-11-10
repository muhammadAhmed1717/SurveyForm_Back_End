const mongoose = require('mongoose');
require("dotenv/config");
const dburl = process.env.MONGODB_URI;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(dburl, connectionParams).then(()=>{
    console.log('Data Base Connected')
}).catch((e)=>{
    console.log('Error n Connecting DataBase: ', error);
})