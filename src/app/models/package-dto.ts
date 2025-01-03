export interface PackageDTO {
  id: number;
  name: string;
  unit_price: number;
  quantity: number;
  create_date?: Date;
  expired_date?: Date;
  image?: string;
  description?: string;
  deleted?: boolean;
  business_id?: number;
  selected_quantity: number;
}
