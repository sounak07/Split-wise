import { Bill } from "../models/bill";
import { User } from "../models/user";
import { BalanceSheet, Transaction } from "../types";

export interface BillServiceI {
    addBill(id: number, groupId: number, amount: number, contribution: any, paidBy: string): Bill;
    getBillByUserId(userId: string): Bill;
    getBills(): any;
    getBalanceSheet(): BalanceSheet;
    setBalanceSheet(balanceSheet: BalanceSheet): void;
    getBalanceSheetByUser(user: User): Transaction[];
    setBalanceSheetByUser(paidBy: User, paidTo: User, amount: number): void;
    getUserBalance(paidBy: User, paidTo: User): number
}

