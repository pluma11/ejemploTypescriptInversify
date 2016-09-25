import { provide, inject } from '../config/KernelConf';
import { User } from '../domain/user';
import {Domicilio} from "../domain/Domicilio";
import {UserDao} from "../dao/UserDao";

@provide(UserService)
export class UserService {

    private userDao:UserDao;

    constructor(@inject(UserDao) userDao: UserDao) {
        this.userDao=userDao;
    }

    public getUsers(): User {
        let user:User={nombre:'oscar',apellido:'fertonani'};

        return user;
    }

    public getUser(id: string): Promise<User> {
        /*return new Promise<User>((resolve, reject) => {
            resolve({firstName:'oscar',apellido:'fertonani'});
        });*/

       return this.userDao.findOne();
    }

    public newUser(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            resolve({nombre:'oscar',apellido:'fertonani'});
        });
    }

    public updateUser(id: string, user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            resolve({nombre:'oscar',apellido:'fertonani'});
        });
    }

    public deleteUser(id: string): Promise<any> {
        return new Promise<User>((resolve, reject) => {
            resolve({nombre:'oscar',apellido:'fertonani'});
        });
    }
}