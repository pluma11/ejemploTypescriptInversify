import * as Sequelize from 'sequelize';
import { provide, inject } from '../config/KernelConf';


@provide(DataSource)
export class DataSource{
    public mysequelize:Sequelize.Sequelize;

    constructor(){
        this.mysequelize=new Sequelize('ejemploDB', 'root', 'root', {
            host: "localhost",
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                timestamps: false,
                freezeTableName: true
            }
        });
    }
}
