export interface ItemsModel {
  title: string;
  status: number;
  friendlyUri: string;
  code: number;
  duration: string;
  description: null | string;
  featuredImageUrl: string;
  audience: null | string;
  trailerVideoId: string;
  instructorFirstNames: null | string;
  instructorLastName: null | string;
  avgRating: number;
  price: number;
  discountPrice: number;
  numberOfLearners: number;
  numberOfLessons: number;
  slug: string;
  id: string;
  categories:Array<any>;
}

export interface InstructorModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImageUrl: string;
  fullName: string;
  createdDate: string;
  lastUpdatedDate: string;
}

export interface CategoriesModel {
  code: number;
  friendlyUri: string;
  id: string;
  name: string;
  featuredImageUrl: null | string;
  slug: string;
  numberOfCourses: number;
}
