import { ServiceFactoryI } from "../interfaces/serviceFactory";
import { BillService } from "./BillService";
import { GroupService } from "./GroupService";
import { UserService } from "./UserService";

export class ServiceFactory implements ServiceFactoryI {
    public createService(type: string): any {
        switch (type) {
            case "user":
                return new UserService();
            case "group":
                return new GroupService();
            case "bill":
                return new BillService();
            default:
                return null;
        }
    }
}