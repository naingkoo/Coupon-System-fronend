export class Feedback {
  id: number | null;
  name: string;
  email: string;
  message: string;      // Additional comments

  constructor(
    id: number | null = null, 
    name: string = '', 
    email: string = '', 
    message: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
  }
}
