import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { InstagramPost } from '../models/instagram-post.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);

  getUser(userId: number): Observable<User> {
    console.log('getUser endpoint');
    console.log(userId);
    return this.http.get<User>('api/users/' + userId);
  }

  getPosts(): Observable<InstagramPost[]> {
    console.log('getPosts endpoints');
    return this.http.get<InstagramPost[]>('api/posts/');
  }

  getPost(postId: number): Observable<InstagramPost> {
    console.log('getPost endpoint');
    return this.http.get<InstagramPost>('api/posts/' + postId);
  }
}
