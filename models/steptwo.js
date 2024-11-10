const mongoose = require("mongoose");
const QuestionSchemea = mongoose.Schema({
    comfort: {
        type: String,
        required: true
    },
    looks: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Question", QuestionSchemea);