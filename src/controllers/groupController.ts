import { GroupServiceI } from "../interfaces/GroupServiceI";
import { Group } from "../models/group";
import { User } from "../models/user";


export class GroupController {

    private groupService: GroupServiceI;

    constructor(groupService: GroupServiceI){
        this.groupService = groupService;
    }

    public addGroup(id: number, members: Array<User>): Group{
        const grp = this.groupService.addGroup(id, members);
        return grp;
    }
}