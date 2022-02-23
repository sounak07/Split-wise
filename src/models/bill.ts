export class Bill {
    private id: number;
    private groupId : number;
    private amount: number;
    private contribution: any = {};
    private paidBy: string;

    constructor(id: number, groupId: number, amount: number, contribution: any, paidBy: string) {
        this.id = id,
        this.groupId = groupId;
        this.amount = amount;
        this.contribution = contribution;
        this.paidBy = paidBy;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getGroupId(): number {
        return this.groupId;
    }

    public setGroupId(groupId: number): void {
        this.groupId = groupId;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getContribution(): number {
        return this.contribution;
    }

    public setContribution(Contribution: any): void {
        this.contribution = Contribution;
    }

    public getPaidBy(): string {
        return this.paidBy;
    }

    public setPaidBy(paidBy: string): void {
        this.paidBy = paidBy;
    }

}