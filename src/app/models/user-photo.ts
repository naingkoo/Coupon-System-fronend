export class UserPhoto {
  id?: number;
  name: string;
  user_id: number;

  constructor(name: string, user_id: number, id?: number) {
    this.id = 0;
    this.name = name;
    this.user_id = user_id;
  }
}
