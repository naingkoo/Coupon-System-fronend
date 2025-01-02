import { User } from "./user";

export class Purchase {
    public id: number;
    public total_amount: number; 
    public total_quantity: number;
    public purchase_date: Date;
    public user: User;

    constructor(
        id: number = 0,
        total_amount: number = 0,
        total_quantity: number = 0,
        purchase_date: Date = new Date(),
        user: User = new User() 
    ) {
        this.id = id;
        this.total_amount = total_amount;
        this.total_quantity = total_quantity;
        this.purchase_date = purchase_date;
        this.user = user;
    }
}
