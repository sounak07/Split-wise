import { BillController } from "./controllers/billController";
import { UserController } from "./controllers/userController";
import { GroupController } from "./controllers/groupController";
import { UserService } from "./services/UserService";
import { GroupService } from "./services/GroupService";
import { BillService } from "./services/BillService";


// Implement factory

const userServ = new UserService();
const groupServ = new GroupService();
const billServ = new BillService();

const userCon = new UserController(userServ);
const groupCon = new GroupController(groupServ);
const billController = new BillController(billServ);


const u1 = userCon.addUser("user1", "Sounak");
const u2 = userCon.addUser("user2", "Ankur");
const u3 = userCon.addUser("user3", "Mark");
const u4 = userCon.addUser("user4", "Shilvy");
const u5 = userCon.addUser("user5", "Stacy");

const members = [u1,u2,u3,u4,u5];

const contri = { "user1": 100, "user2": 100, "user3": 100, "user4": 100, "user5": 100 };
const paidBy = { "user1": 200, "user2": 100, "user3": 50, "user4": 50, "user5": 100 };

const grp = groupCon.addGroup(11, members);

const bill = billController.addBill(111, grp.getId(),500, contri, paidBy);

console.log(bill.getAmount());

console.log(billController.getUserBalance("user4"));
