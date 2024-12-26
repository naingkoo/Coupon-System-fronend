import { Coupon } from './coupon';

export class Customer {
    constructor(public id:number,
     public custName:string,
     public password:string,
     public couponList:Coupon[]){}
}
