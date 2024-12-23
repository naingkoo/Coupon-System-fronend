export class Review {
  id: number;
  businessId: number;
  userId: number;
  rating: number;
  message: string;
  reviewDate: Date;

  constructor(
    id: number = 0,
    businessId: number = 0,
    userId: number = 0,
    rating: number = 0,
    message: string = '',
    reviewDate: Date = new Date()
  ) {
    this.id = id;
    this.businessId = businessId;
    this.userId = userId;
    this.rating = rating;
    this.message = message;
    this.reviewDate = reviewDate;
  }
}
