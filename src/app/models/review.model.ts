export class Review {
  id: number;
  businessId: number;
  userId: number;
  rating: number;
  message: string;
  reviewDate: Date;
  user_name: string;
  user_photo: string;

  constructor(
    id: number = 0,
    businessId: number = 0,
    userId: number = 0,
    rating: number = 0,
    message: string = '',
    reviewDate: Date = new Date(),
    user_name: string = '',
    user_photo: string = ''
  ) {
    this.id = id;
    this.businessId = businessId;
    this.userId = userId;
    this.rating = rating;
    this.message = message;
    this.reviewDate = reviewDate;
    this.user_name = user_name;
    this.user_photo = user_photo;
  }
}
