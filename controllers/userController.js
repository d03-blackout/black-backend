import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"})
    }
};
