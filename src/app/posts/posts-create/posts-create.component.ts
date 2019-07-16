import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  public post: any = '';
  public titleText: any = '';
  public bodyText: any = '';
  @Output() postCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post = {
      title: this.titleText,
      content: this.bodyText
    };

    this.postCreated.emit(post);
  }

}
