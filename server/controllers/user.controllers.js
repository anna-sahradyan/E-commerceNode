import jwt from "jsonwebtoken";
import User from "../models/user.js";
import CryptoJS from "crypto-js";

//!SIGNIN(login)
export const signIn = async (req, res) => {
    try {
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );

        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        originalPassword != inputPassword &&
        res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            {expiresIn: "30d"}
        );

        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});

    } catch (err) {
        res.status(500).json(err);
    }

}
//!SIGNUP(register)
export const signUp = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }

}
//!UPDATE
export const updatedUser = async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}
//!DELETE USER

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }

}
//!GET USER
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json({others});
    } catch (err) {
        res.status(500).json(err);
    }

}
//!GET ALL USER
export const getAllUsers = async (req, res) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({_id: -1}).limit(3)
            : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
}


//!GET USER STATS
export const getStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1},
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
}