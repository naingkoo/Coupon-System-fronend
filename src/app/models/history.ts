export class History {
  id: number; // Unique identifier for the transaction
  date: string; // Date of the transaction
  amount: number; // Amount involved in the transaction
  method: string; // Payment method (e.g., Credit Card, PayPal)
  status: string; // Status of the transaction (e.g., Completed, Pending)
  description: string; // Description or reason for the transaction

  constructor(
    id: number,
    date: string,
    amount: number,
    method: string,
    status: string,
    description: string
  ) {
    this.id = id;
    this.date = date;
    this.amount = amount;
    this.method = method;
    this.status = status;
    this.description = description;
  }
}

export const DEFAULT_HISTORY: History[] = [
  new History(
    1,
    '2024-12-01',
    100.0,
    'Credit Card',
    'Completed',
    'Hotel reservation coupon purchase'
  ),
  new History(
    2,
    '2024-12-03',
    50.0,
    'PayPal',
    'Completed',
    'Restaurant coupon purchase'
  ),
  new History(
    3,
    '2024-12-05',
    30.0,
    'Credit Card',
    'Pending',
    'Nightclub entry coupon purchase'
  ),
  new History(
    4,
    '2024-12-07',
    80.0,
    'Debit Card',
    'Completed',
    'Resort bungalow coupon purchase'
  ),
];
