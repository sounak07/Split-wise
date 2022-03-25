import { UserServiceI } from "../interfaces/UserServiceI";
import { User } from "../models/user";


export class UserController {

    private userService: UserServiceI;

    constructor(userService: UserServiceI){
        this.userService = userService;
    }
    
    public addUser(id: string, name: string): User {
        const user = this.userService.addUser(name,id);
        return user;
    }

    public getUserById(userId: string): User {
        return this.userService.getUserById(userId);
    }
}