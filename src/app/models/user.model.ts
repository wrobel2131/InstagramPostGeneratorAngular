export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  coins: number;
}

export type UpdateUser = Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>;

export type UserLoginCredentials = Pick<User, 'email'> & { password: string };

export type UserRegisterCredentials = Pick<User, 'email'>;
