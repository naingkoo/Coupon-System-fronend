export class Purchase {
  public id: number;
  public total_amount: number;
  public total_quantity: number;
  public payment_type: string;
  public transaction_id: string;
  public user_id: number;

  constructor();

  constructor(
    id: number,
    total_amount: number,
    total_quantity: number,
    payment_type: string,
    transaction_id: string,
    user_id: number
  );

  constructor(
    id?: number,
    total_amount?: number,
    total_quantity?: number,
    payment_type?: string,
    transaction_id?: string,
    user_id?: number
  ) {
    this.id = id || 0;
    this.total_amount = total_amount || 0;
    this.total_quantity = total_quantity || 0;
    this.payment_type = payment_type || '';
    this.transaction_id = transaction_id || '';
    this.user_id = user_id || 0;
  }
}
