import { User } from "../models/user";

export interface UserServiceI {
    addUser(name: string, id: string): User,
    getUserById(userId: string): User
}