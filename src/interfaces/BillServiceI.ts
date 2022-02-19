import { Bill } from "../models/bill";

export interface BillServiceI {
    addBill(id: number, groupId: number, amount: number, contribution: any, paidBy: any): Bill;
    getBills(): any;
}

