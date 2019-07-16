import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';

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

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };

    this.postCreated.emit(post);
  }

}
