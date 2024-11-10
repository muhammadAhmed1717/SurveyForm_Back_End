const User = require('../models/user');
const Question = require('../models/steptwo');

exports.addData = async (req, res) => {
    try {
        console.log('Try in Api');
        const obj = req.body.step2;
        const question = new Question(obj)
        console.log('Object: ', question)
        const user = new User({
            email: req.body.email,
            step1: req.body.step1,
            step2: question,
            status: 'completed'
        });
        console.log('User: ', user)
        const exists = await User.findOne({ email: req.body.email });
        console.log(exists);
        if (exists) {
            return res.json("User Already Exists");
        }
        const saveduser = await user.save();
        res.json("User Saved Successfully");
    } catch (error) {
        console.log("Error in Api")
    }
}