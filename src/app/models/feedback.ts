export class Feedback {
  id: number | null;
  name: string;
  email: string;
  professional: string;  // Feedback on professionalism
  comments: string;      // Additional comments

  constructor(
    id: number | null = null, 
    name: string = '', 
    email: string = '', 
    professional: string = '', 
    comments: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.professional = professional;
    this.comments = comments;
  }
}
