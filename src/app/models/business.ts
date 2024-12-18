import { User } from './user';

export class Business {
  public id: number;
  public name: string;
  public country: string;
  public city: string;
  public street: string;
  public address: string;
  public user_id: number;
  public image: string;
  public categoryId: number[];
  public serviceId: number[];
  public categoryName: string[];
  public serviceName: string[];

  constructor();

  constructor(
    id: number,
    name: string,
    country: string,
    city: string,
    street: string,
    address: string,
    user_id: number,
    image: string,
    categoryId: number[],
    serviceId: number[],
    categoryName: string[],
    serviceName: string[]
  );

  constructor(
    id?: number,
    name?: string,
    country?: string,
    city?: string,
    street?: string,
    address?: string,
    user_id?: number,
    image?: string,
    categoryId?: number[],
    serviceId?: number[],
    categoryName?: string[],
    serviceName?: string[]
  ) {
    this.id = id || 0;
    this.name = name || '';
    this.country = country || '';
    this.city = city || '';
    this.street = street || '';
    this.address = address || '';
    this.user_id = user_id || 0; // Set the user property to null or passed user
    this.image = image || '';
    this.categoryId = categoryId || []; // If no category is provided, initialize as an empty array
    this.serviceId = serviceId || []; // If no category is provided, initialize as an empty array
    this.categoryName = categoryName || [];
    this.serviceName = serviceName || [];
  }
}
