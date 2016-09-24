import { provide, inject } from '../config/KernelConf';
import { User } from '../domain/user';
import {Domicilio} from "../domain/Domicilio";

@provide(UserService)
export class UserService {


    constructor() {
    }

    public getUsers(): User {
        let user:User=new User('oscar','oscar');
        let domicilio:Domicilio=new Domicilio('sarmiento', 4261);
        user.domicilio=domicilio;
        return user;
    }

    public getUser(id: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            resolve(new User('oscar','oscar'));
        });

    }

    public newUser(user: User): Promise<User> {
        return new Promise<User[]>(() => {
            return new User('oscar','oscar');
        });
    }

    public updateUser(id: string, user: User): Promise<User> {
        return new Promise<User[]>(() => {
            return new User('oscar','oscar');
        });
    }

    public deleteUser(id: string): Promise<any> {
        return new Promise<User[]>(() => {
            return new User('oscar','oscar');
        });
    }
}