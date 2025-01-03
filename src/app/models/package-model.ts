export class Packages {
  public id: number;
  public name: string;
  public unit_price: number;
  public quantity: number;
  public create_date: Date;
  public image?: string; // Optional property
  public description?: string; // Optional property
  public business_id: number; // Optional property
  public selectedQuantity: number;
  public expired_date: string; // New optional property

  constructor(
    id: number = 0,
    name: string = '',
    unit_price: number = 0,
    quantity: number = 0,
    create_date: Date = new Date(),
    image?: string,
    description?: string,
    business_id?: number,
    selectedQuantity?: number,
    expired_date?: string
  ) {
    this.id = id;
    this.name = name;
    this.unit_price = unit_price;
    this.quantity = quantity;
    this.create_date = create_date;
    this.image = image;
    this.description = description;
    this.business_id = business_id || 0;
    this.selectedQuantity = selectedQuantity || 0;
    this.expired_date = expired_date || ''; // Initialize expiration date
  }
}
