import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      users: [
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
      ],
    };
  }
}
