import { BillController } from "./controllers/billController";
import { UserController } from "./controllers/userController";
import { GroupController } from "./controllers/groupController";
import { ServiceFactory } from "./services/ServiceFactory";


const serviceFactory = new ServiceFactory();
const userServ = serviceFactory.createService("user");
const groupServ = serviceFactory.createService("group");
const billServ = serviceFactory.createService("bill");

const userCon = new UserController(userServ);
const u1 = userCon.addUser("user1", "Sounak");
const u2 = userCon.addUser("user2", "Ankur");
const u3 = userCon.addUser("user3", "Mark");
const u4 = userCon.addUser("user4", "Shilvy");
const u5 = userCon.addUser("user5", "Stacy");

const groupCon = new GroupController(groupServ);
const billController = new BillController(billServ);




const members = [u1,u2,u3,u4,u5];

const contri = { "user1": 200, "user2": 100, "user3": 50, "user4": 50, "user5": 100 };
// const paidBy = "user2";
const paidBy2 = "user1";

const grp = groupCon.addGroup(11, members);

// billController.addBill(111, grp.getId(), 500, contri, paidBy);
billController.addBill(112, grp.getId(), 500, contri, paidBy2);


console.log(billController.getUserBalance("user2"));
