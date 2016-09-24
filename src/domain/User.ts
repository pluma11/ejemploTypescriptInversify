import {Domicilio} from  './Domicilio';

export class User {

    public domicilio:Domicilio;

    constructor(
        public email: string,
        public name: string,
        public _id?: string
    ) { }
}