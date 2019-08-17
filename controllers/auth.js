const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/user')

exports.signup = async (req, res) => {
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(403).json({
        error: "email is taken!"
    })
    const user = await new User(req.body)
    await user.save()
    res.status(200).json({ message: "Signup success! Please login." });
};

exports.signin = (req,res) => {
    //find user based on email
    const{email, password} = req.body
    //if error or no user

    //if user, authenticate

    //gen token

    //persist token as 't' with exp date

    //return response with user and token

}