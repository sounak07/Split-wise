import { BillServiceI } from "../interfaces/BillServiceI";
import { Bill } from "../models/bill";
import { User } from "../models/user";
import { UserController } from "./userController";

export class BillController {
    private BillService: BillServiceI;

    constructor(billService: BillServiceI){
        this.BillService = billService;
    }

    public addBill(id: number, groupId: number, amount: number, contribution: any, paidBy: string, userCon: UserController): Bill{
        const bill = this.BillService.addBill(id, groupId, amount, contribution, paidBy);

        for(const paidTo in contribution)
        {
            if(paidBy != paidTo) {
                const takerBalance = this.BillService.getUserBalance(userCon.getUserById(paidBy), userCon.getUserById(paidTo));
                const giverBalance = this.BillService.getUserBalance(userCon.getUserById(paidTo), userCon.getUserById(paidBy));
                this.BillService.setBalanceSheetByUser(userCon.getUserById(paidBy), userCon.getUserById(paidTo), takerBalance + contribution[paidTo]);
                this.BillService.setBalanceSheetByUser(userCon.getUserById(paidTo), userCon.getUserById(paidBy), giverBalance - contribution[paidTo]);
            }
           
        }
        return bill;
    }

    public getUserBalance(user: User): void {
        
        const balanceSheet = this.BillService.getBalanceSheetByUser(user);

        balanceSheet.forEach((value) => {

            if (user.getId() != value.giver.getId()) {
                const amount = value.amount;
                
                if (amount < 0)
                    console.log (`${value.giver.getName()} owns ${user.getName()} Rs ${Math.abs(amount)}`);
                else if (amount > 0)
                    console.log(`${user.getName()} owns ${value.giver.getName()} Rs ${Math.abs(amount)}`);
                else
                    console.log(`All Settled For ${user.getName()}`);
            }
        });

    }

    public getBalanceSheet(): void {
        const sheet = this.BillService.getBalanceSheet();
        console.log(sheet);
    }
}