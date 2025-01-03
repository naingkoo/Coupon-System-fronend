export class SelectedPackage {
  constructor(
    public id: number,
    public selected_quantity: number,
    public expired_date: string // or Date if needed
  ) {}
}
