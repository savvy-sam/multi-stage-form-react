import User from "../models/UserModel.js";
import { genPassword } from "../Middleware/userMiddleware.js";
import e from "express";

 
export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createUser = async (req, res, next) =>{

    const userExists = await User.findOne({ where: {email: req.body.email} }).catch((err) => {
      console.log(err);
    });

    if (!userExists) {

    const saltHash = genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    req.body.salt= salt
    req.body.hash= hash

    try {
        await User.create(req.body);
        console.log("User Created Succesfully ")
        res.status(202).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
} else {
    console.log('User Already Exists !!!!')
    res.status(403).json({message: "This User Already Exists"})

}
}
 
export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

