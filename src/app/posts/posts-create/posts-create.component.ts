import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  public post: any = '';
  public enteredText: any = '';

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    console.dir(this.enteredText);
    this.post = this.enteredText;
  }

}
