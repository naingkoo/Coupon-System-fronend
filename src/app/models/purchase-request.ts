import { PackageDTO } from './package-dto';
import { PurchaseDTO } from './purchase-dto';

export interface PurchaseRequest {
  purchaseDTO: PurchaseDTO;
  selectedPackages: PackageDTO[];
}
