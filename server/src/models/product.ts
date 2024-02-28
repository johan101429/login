import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const product = sequelize.define('product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        
    },
    description:{
        type:DataTypes.STRING
    }

},)
