import { UserServiceI } from "../interfaces/UserServiceI";
import { User } from "../models/user";


export class UserService implements UserServiceI {

    private users: any = {};
    public addUser(name: string, id: string): User {
        const user = new User(name, id);
        this.users[id] = user;
        return user;
    }
}