export class Category {
  public id: number;
  public name: string;

  constructor();

  constructor(id: number, name: string);

  constructor(id?: number, name?: string) {
    this.id = id || 0;
    this.name = name || '';
  }
}
