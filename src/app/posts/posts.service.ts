import { Post } from './posts.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    // return [...this.posts];
    this.http.get<{message: string, data: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postsData) => {
        this.posts = postsData.data;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title, content};

    this.http.post<{message: string; data: Post}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.data);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
