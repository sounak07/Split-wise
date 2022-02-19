export class User {
    private name: string;
    private id: string;

    constructor(name: string, id: string){
        this.id = id,
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }
}