import { User } from "../models/user";

export interface Transaction {
    giver: User,
    amount: number
}

export type BalanceSheet = Map<User, Array<Transaction>>