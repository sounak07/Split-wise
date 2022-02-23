export interface Transaction {
    userId: string,
    amount: number
}

export type BalanceSheet = Map<string, Transaction[]>