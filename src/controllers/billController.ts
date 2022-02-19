import { BillServiceI } from "../interfaces/BillServiceI";
import { Bill } from "../models/bill";


export class BillController {
    private BillService: BillServiceI;

    constructor(billService: BillServiceI){
        this.BillService = billService;
    }

    public addBill(id: number, groupId: number, amount: number, contribution: any, paidBy: any): Bill{
        const bill = this.BillService.addBill(id,groupId,amount,contribution,paidBy);
        return bill;
    }

    public getUserBalance(userId: string): number{
        let balance = 0;

        const bills = this.BillService.getBills();

        for(const billId in bills){
            const billContribution = bills[billId].getContribution();
            const billPaid = bills[billId].getPaidBy();

            if (userId in billContribution){
                balance = balance - billContribution[userId];
            }

            if (userId in billPaid) {
                balance = balance + billPaid[userId];
            }
        }
        return balance;
    }
}