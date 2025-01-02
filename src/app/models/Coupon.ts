import { Packages } from "./package-model";
import { Purchase } from "./Purchase";

export class Coupon{
    public id:number;
    public sale_date:Date;
    public expired_date:Date;
    public status:boolean;
    public transfer_status:boolean;
    public purchase?:Purchase;
    public packageEntity?:Packages;

    constructor(
        id:number=0,
        sale_date:Date=new Date(),
        expired_date:Date=new Date(),
        status:boolean=true,
        transfer_status:boolean=true,
        purchase?:Purchase,
        packageEntity?:Packages
    )
    {
        this.id=id;
        this.sale_date=sale_date;
        this.expired_date=expired_date;
        this.status=status;
        this.transfer_status=transfer_status;
        this.purchase=purchase;
        this.packageEntity=packageEntity;
    }

}