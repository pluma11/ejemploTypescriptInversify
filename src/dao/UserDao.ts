import * as Sequelize from 'sequelize';
import { provide, inject } from '../config/KernelConf';
import {DataSource} from '../config/DataSource';
import {User} from "../domain/User";


@provide(UserDao)
export class UserDao {

    public mysequelize;
    public userRepository;

    constructor(@inject(DataSource) private dataSource: DataSource ){
        this.mysequelize=dataSource.mysequelize;

        this.userRepository=this.mysequelize.define('user',
            {
            id: { type: Sequelize.INTEGER, primaryKey: true},
            nombre: {type: Sequelize.STRING,field: 'firstName'},
            apellido: {type: Sequelize.STRING,field: 'lastName'}
            });
    }

    public findOne():Promise<User>{
       return this.userRepository.findOne();
    }



}

