const mongoose = require("mongoose");
const QuestionSchemea = mongoose.Schema({
    comfort: {
        type: Number,
        required: true
    },
    looks: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model("Question", QuestionSchemea);