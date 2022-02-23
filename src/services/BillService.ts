import { BillServiceI } from "../interfaces/BillServiceI";
import { Bill } from "../models/bill";
import { BalanceSheet, Transaction } from "../types";


export class BillService implements BillServiceI {

    private Bills: any = {};
    private BalanceSheet: BalanceSheet = new Map<string, []>();

    public addBill(id: number, groupId: number, amount: number, contribution: any, paidBy: string): Bill {
        const bill = new Bill(id, groupId, amount, contribution, paidBy);
        this.Bills[id] = bill;
        return bill;
    }

    public getBillByUserId(userId: string): Bill {
        return this.Bills[userId];
    }

    public getBills() {
        return this.Bills;
    }

    public getBalanceSheet(): BalanceSheet{
        return this.BalanceSheet;
    }

    public setBalanceSheet(balanceSheet: BalanceSheet): void {
        this.BalanceSheet = balanceSheet;
    }

    public getBalanceSheetByUser(userId: string): Transaction[] {
        return this.BalanceSheet.get(userId) || [];
    }

    public getTransactionByUser(paidBy: string, paidTo: string): Transaction {
        const userBalanceSheet: Transaction[] = this.BalanceSheet.get(paidBy) || [];
        const transaction = userBalanceSheet.find(o => o.userId  === paidTo);
        return transaction;
    }

    public setBalanceSheetByUser(paidBy: string, paidTo: string, amount: number): void {
        const balance: Transaction = {
            userId: paidTo,
            amount: amount
        };
        const balanceList = this.getBalanceSheetByUser(paidBy);
        balanceList.push(balance);
        this.BalanceSheet.set(paidBy, balanceList);
    }

}