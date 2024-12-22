import { Company } from './company';
import {Customer} from './Customer';
import { Coupontype } from './CouponType';

export class Coupon {

    constructor(public id:number,public title:string,public messege:string,
        public image:string ,public amount:number ,public price:number
        ,public startDate:Date , public endDate:Date,public type:Coupontype,public company:Company,public customerList:Customer[]){}
        
}
