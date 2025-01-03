export class Coupon {
  id: number | null = null; // Coupon ID
  expired_date: Date | null = null; // Expiration date of the coupon
  confirm: boolean | null = null; // Confirmation status
  status: boolean | null = null; // Coupon usage status
  transfer_status: boolean | null = null; // Transfer status
  purchase_id: number | null = null; // Associated purchase ID
  package_id: number | null = null; // Associated package ID

  constructor(init?: Partial<Coupon>) {
    Object.assign(this, init);
  }
}
