export interface PurchaseDTO {
  id?: number;
  total_amount: number;
  total_quantity: number;
  payment_type: string;
  transaction_id: string;
  purchase_date?: Date;
  user_id: number;
}
