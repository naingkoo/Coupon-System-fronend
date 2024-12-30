export class contact {
    id: number=0;
    name: string = '';
    email: string = '';
    message: string = '';

    constructor(
      id: number=0,
      name: string = '', 
      email: string = '', 
      message: string = ''
    ) {
      this.id=id;
      this.name = name;
      this.email = email;
      this.message = message;
    }
  }
  