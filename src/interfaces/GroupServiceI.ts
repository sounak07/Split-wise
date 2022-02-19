import { Group } from "../models/group";
import { User } from "../models/user";

export interface GroupServiceI {
    addGroup(id: number, members: Array<User>): Group;
}

