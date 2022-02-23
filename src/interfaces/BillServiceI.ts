import { Bill } from "../models/bill";
import { BalanceSheet, Transaction } from "../types";

export interface BillServiceI {
    addBill(id: number, groupId: number, amount: number, contribution: any, paidBy: string): Bill;
    getBillByUserId(userId: string): Bill;
    getBills(): any;
    getBalanceSheet(): BalanceSheet;
    setBalanceSheet(balanceSheet: BalanceSheet): void;
    getBalanceSheetByUser(userId: string): Transaction[];
    setBalanceSheetByUser(paidBy: string, paidTo: string, amount: number): void;
    getTransactionByUser(paidBy: string, paidTo: string): Transaction;
}

