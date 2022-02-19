import { BillServiceI } from "../interfaces/BillServiceI";
import { Bill } from "../models/bill";

export class BillService implements BillServiceI {

    public Bills: any = {};

    public addBill(id: number, groupId: number, amount: number, contribution: any, paidBy: any): Bill {
        const bill = new Bill(id, groupId, amount, contribution, paidBy);
        this.Bills[id] = bill;
        return bill;
    }

    public getBills() {
        return this.Bills;
    }
}