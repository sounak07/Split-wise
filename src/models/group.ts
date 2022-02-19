import { User } from "../models/user";

export class Group {
    private id: number;
    private members: Array<User>;

    constructor(id: number, members: Array<User>){
        this.id = id;
        this.members = members;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getMembers(): Array<User> {
        return this.members;
    }

    public setMembers(members:Array<User>): void {
        this.members = members;
    }

}