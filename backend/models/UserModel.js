import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
    firstName: {type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{type: DataTypes.STRING,
        allowNull: false
    },
    email:{type: DataTypes.STRING,
        allowNull:false,
        isEmail: true
    },
    salt: DataTypes.STRING,
    hash: DataTypes.STRING,
    image: DataTypes.STRING,
    about: {type: DataTypes.STRING,
        len:[2, 100]
    },
    award: DataTypes.STRING,
    specialization: DataTypes.STRING,
    courseName: DataTypes.STRING,
    gender: DataTypes.STRING,
    startYear: {type: DataTypes.DATE,
        isDate: true
    },
    endYear:{type: DataTypes.DATE,
        isDate: true
    },

},{
    freezeTableName:true
});
 
export default User;
 
(async()=>{
    await db.sync();
})();