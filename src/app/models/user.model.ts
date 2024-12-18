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

  // Static method to return an array of sample users
  static createUsers(): User[] {
    return [
      new User(
        'Alice Johnson',
        '1234567890',
        'alice@example.com',
        'password1',
        'password1',
        'admin'
      ),
      new User(
        'Bob Smith',
        '0987654321',
        'bob@example.com',
        'password2',
        'password2',
        'vendor'
      ),
      new User(
        'Charlie Brown',
        '5555555555',
        'charlie@example.com',
        'password3',
        'password3',
        'customer'
      ),
      new User(
        'David White',
        '4444444444',
        'david@example.com',
        'password4',
        'password4',
        'customer'
      ),
      new User(
        'Emma Green',
        '3333333333',
        'emma@example.com',
        'password5',
        'password5',
        'vendor'
      ),
    ];
  }
}
