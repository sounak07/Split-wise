import { BillServiceI } from "../interfaces/BillServiceI";
import { Bill } from "../models/bill";
import { User } from "../models/user";
import { BalanceSheet, Transaction } from "../types";


export class BillService implements BillServiceI {

    private Bills: any = {};
    private BalanceSheet: BalanceSheet = new Map<User, Array<Transaction>>();

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

    public getBalanceSheetByUser(user: User): Array<Transaction> {
        return this.BalanceSheet.get(user) || [];
    }

    public getUserBalance(paidBy: User, paidTo: User): number {
        const transactions: Array<Transaction> = this.getBalanceSheetByUser(paidTo);
        const transaction = transactions.find(trans => trans.giver === paidBy);
        return transaction?.amount || 0;
    }

    public setBalanceSheetByUser(paidBy: User, paidTo: User, amount: number): void {
        const balance: Transaction = {
            giver: paidBy,
            amount: amount
        };

        const transactions: Array<Transaction> = this.getBalanceSheetByUser(paidTo);

        const transIndx = transactions.indexOf(balance);

        if (transIndx != -1)
            transactions[transIndx] = balance;
        else
            transactions.push(balance);

        this.BalanceSheet.set(paidTo, transactions);
    }

}