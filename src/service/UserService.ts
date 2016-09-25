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
        let user:User={firstName:'oscar',lastName:'fertonani'};

        return user;
    }

    public getUser(id: string): User {
        /*return new Promise<User>((resolve, reject) => {
            resolve({firstName:'oscar',lastName:'fertonani'});
        });*/
        var u:User;
        this.userDao.findOne().then(
            (data)=>{u=data;
                return u;});
        return u;
    }

    public newUser(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            resolve({firstName:'oscar',lastName:'fertonani'});
        });
    }

    public updateUser(id: string, user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            resolve({firstName:'oscar',lastName:'fertonani'});
        });
    }

    public deleteUser(id: string): Promise<any> {
        return new Promise<User>((resolve, reject) => {
            resolve({firstName:'oscar',lastName:'fertonani'});
        });
    }
}