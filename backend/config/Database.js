import {Sequelize} from "sequelize";

const db = new Sequelize(
 'KFS',
 'root',
 '54321Milan',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

export default db;