/*Models (in future, they will be in separated files) */

export interface User {
  id: number;
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  password: string;
  coins: number;
}

export type UserCredentials = Pick<User, 'login'> & { password: string };

export interface InstagramPost {
  id: number;
  userId: number;
  title: string;
  imageUrl: string;
  description: string;
}

export interface InMemoryDb {
  users: User[];
  posts: InstagramPost[]; // Use your User interface here
  // ... any other collections
}
