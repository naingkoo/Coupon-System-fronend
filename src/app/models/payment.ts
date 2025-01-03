export class Payment {
  public id: number;
  public paymentType: string;
  public total_amount: number;
  public transaction_id: string;
  public user_id: number;

  constructor();

  constructor(
    id: number,
    paymentType: string,
    total_amount: number,
    transaction_id: string,
    user_id: number
  );

  constructor(
    id?: number,
    paymentType?: string,
    total_amount?: number,
    transaction_id?: string,
    user_id?: number
  ) {
    this.id = id || 0;
    this.paymentType = paymentType || '';
    this.total_amount = total_amount || 0;
    this.transaction_id = transaction_id || '';
    this.user_id = user_id || 0;
  }
}
