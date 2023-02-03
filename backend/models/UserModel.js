import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
    firstName: DataTypes.STRING,
    lastName:DataTypes.STRING,
    email:DataTypes.STRING,
    confirmPassword: DataTypes.STRING,
    image: DataTypes.STRING,
    about: DataTypes.STRING,
    award: DataTypes.STRING,
    specialization: DataTypes.STRING,
    courseName: DataTypes.STRING,
    gender: DataTypes.STRING,
    startYear: DataTypes.DATE,
    endYear: DataTypes.DATE

},{
    freezeTableName:true
});
 
export default User;
 
(async()=>{
    await db.sync();
})();