import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../posts.model';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  public post: Post;
  public titleText: any = '';
  public bodyText: any = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post: Post = {
      title: this.titleText,
      content: this.bodyText
    };

    this.postCreated.emit(post);
  }

}
