export class Profile {
    id: number;
    photo_name: string;
    user_id: number;
  
    constructor(id: number, photo_name: string, user_id: number) {
      this.id = id;
      this.photo_name = photo_name;
      this.user_id = user_id;
    }
  }
  