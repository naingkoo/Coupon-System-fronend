export class User {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;

  role: string;
  

  constructor(
    username: string = '',
    phone: string = '',
    email: string = '',
    password: string = '',
    confirmPassword: string = '',

    role: string = ''
  ) {
    this.username = username;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.role = role;
  }
}
