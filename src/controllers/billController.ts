import { BillServiceI } from "../interfaces/BillServiceI";
import { Bill } from "../models/bill";
import { Transaction } from "../types";

export class BillController {
    private BillService: BillServiceI;

    constructor(billService: BillServiceI){
        this.BillService = billService;
    }

    public addBill(id: number, groupId: number, amount: number, contribution: any, paidBy: string): Bill{
        const bill = this.BillService.addBill(id, groupId, amount, contribution, paidBy);
        // this.BillService.createBalanceSheetByUser(paidBy);

        for(const paidTo in contribution)
        {
            // console.log("1", paidBy, paidTo,this.BillService.getTransactionByUser(paidBy, paidTo)?.amount);
            this.BillService.setBalanceSheetByUser(paidBy, paidTo, (this.BillService.getTransactionByUser(paidBy, paidTo)?.amount || 0)  + contribution[paidTo]);
            // console.log("2", paidBy, paidTo,(this.BillService.getTransactionByUser(paidBy, paidTo)?.amount || 0) , contribution[paidTo]);
            this.BillService.setBalanceSheetByUser(paidBy, paidBy, (this.BillService.getTransactionByUser(paidTo, paidBy)?.amount || 0) - contribution[paidTo]);
            // console.log("3", paidTo, paidBy, (this.BillService.getTransactionByUser(paidTo, paidBy)?.amount || 0) , contribution[paidTo]);

            console.log(this.BillService.getBalanceSheet());
        }
        return bill;
    }

    public getUserBalance(userId: string): void {
        
        const balanceSheet: Array<Transaction> = this.BillService.getBalanceSheetByUser(userId);

        // console.log(this.BillService.getBalanceSheet());

        for(const i in balanceSheet){
            if (balanceSheet[i].userId == userId)
                continue;

            if (balanceSheet[i].amount > 0)
                console.log (`${balanceSheet[i].userId} owns ${userId} Rs ${Math.abs(balanceSheet[i].amount)}`);
            else if (balanceSheet[i].amount < 0)
                console.log(`${userId} owns ${balanceSheet[i].userId} Rs ${Math.abs(balanceSheet[i].amount)}`);
            else
                console.log(`All Settled For ${userId}`);
        }

       
    }
}