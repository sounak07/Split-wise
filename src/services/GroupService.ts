import { GroupServiceI } from "../interfaces/GroupServiceI";
import { Group } from "../models/group";
import { User } from "../models/user";

export class GroupService implements GroupServiceI {

    private groups: any = {};

    public addGroup(id: number, members: User[]): Group {
        const group = new Group(id, members);
        this.groups[id] = group;
        return group;
    }
}