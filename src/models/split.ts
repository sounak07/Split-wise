export class Split {
    private id: string;
    private userId: string;
    private amount: number;

    constructor(id: string, userId: string, amount:number) { 
        this.id = id;
        this.amount = amount;
        this.userId = userId;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.id = userId;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }
}