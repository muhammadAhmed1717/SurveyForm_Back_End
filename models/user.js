const mongoose = require("mongoose");
const UserSchemea = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    step1: {
        type: String,
        require: true
    },
    step2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
    },
    status: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("User", UserSchemea);