/*Models (in future, they will be in separated files) */

export interface User {
  email: string;
  login: string;
  firstName: string;
  lastName: string;
}

export type UserCredentials = Pick<User, 'login'> & { password: string };

/* Temporary data for simulating backend api*/

export const USERS_MOCK: User[] = [
  {
    email: 'user1@example.com',
    login: 'user1',
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    email: 'user2@example.com',
    login: 'user2',
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    email: 'user3@example.com',
    login: 'user3',
    firstName: 'Alice',
    lastName: 'Smith',
  },
  {
    email: 'user4@example.com',
    login: 'user4',
    firstName: 'Bob',
    lastName: 'Brown',
  },
  {
    email: 'user5@example.com',
    login: 'user5',
    firstName: 'Charlie',
    lastName: 'Davis',
  },
];

const USER_CREDENTIALS_MOCK: UserCredentials[] = USERS_MOCK.map(
  (user, index) => ({
    login: user.login,
    password: `Password${index + 1}!`, // Simple pattern to create unique passwords
  })
);
