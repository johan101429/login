import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('rrhh','root','n',{
    host:'localhost',
    dialect:'mysql',
});
export default sequelize;
