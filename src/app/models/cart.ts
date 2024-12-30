import { Packages } from './package-model';

export class Cart {
  id: number;
  user_id: number;
  package_id: number;
  unit_quantity: number;
  unit_price: number;

  packageDetails: Packages;

  constructor(
    id: number = 0,
    user_id: number = 0,
    package_id: number = 0,
    unit_quantity: number = 0,
    unit_price: number = 0,
    packageDetails: Packages = new Packages()
  ) {
    this.id = id;
    this.user_id = user_id;
    this.package_id = package_id;
    this.unit_quantity = unit_quantity;
    this.unit_price = unit_price;
    this.packageDetails = packageDetails;
  }
}
