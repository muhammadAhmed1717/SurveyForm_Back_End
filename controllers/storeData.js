const User = require('../models/user');
const Question = require('../models/steptwo');

exports.addData = async (req, res) => {
    try {
        console.log('Try in Api');
        const question = new Question({
            comfort: req.body.comfort,
            looks: req.body.looks,
            price: req.body.price,
        })
        const user = new User({
            email: req.body.email,
            step1: req.body.step1,
            step2: question,
            status: 'completed'
        });
        const exists = await User.findOne({ email: req.body.email });
        console.log(exists);
        if (exists) {
            return res.json("User Already Exists");
        }
        const saveduser = await user.save();
        res.json(saveduser);
    } catch (error) {
        console.log("Error in Api")
    }
}