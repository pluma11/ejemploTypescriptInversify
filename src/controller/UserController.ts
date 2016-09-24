import { Controller, Get, Post, Put, Delete, TYPE } from 'inversify-express-utils';
import { provideNamed, inject } from '../config/KernelConf';
import { Request } from 'express';
import { User } from '../domain/user';
import { UserService } from '../service/UserService';


@provideNamed(TYPE.Controller, UserController)
@Controller('/user')
export class UserController {

    constructor( @inject(UserService) private userService: UserService) { }

    @Get('/')
    public getUsers(): User {
        return this.userService.getUsers();

    }

    @Get('/:id')
    public getUser(request: Request): Promise<User> {
        return this.userService.getUser(request.params.id);
    }

    @Post('/')
    public newUser(request: Request): Promise<User> {
        return this.userService.newUser(request.body);
    }

    @Put('/:id')
    public updateUser(request: Request): Promise<User> {
        return this.userService.updateUser(request.params.id, request.body);
    }

    @Delete('/:id')
    public deleteUser(request: Request): Promise<any> {
        return this.userService.deleteUser(request.params.id);
    }
}