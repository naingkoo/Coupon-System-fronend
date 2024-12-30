export class User {
  id?: number | null;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  register_date: string;
  role?: string;
  photo?:string;

  constructor();

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    register_date: string,
    role: string
  );

  constructor(
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    phone?: string,
    register_date?: string,
    role?: string
  ) {
    this.id = id || 0;
    this.name = name || '';
    this.email = email || '';
    this.password = password || '';
    this.register_date = register_date || '';
    this.phone = phone || '';
  }
}
