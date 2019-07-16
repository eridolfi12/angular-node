import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts = [
    {title: 'First Post', content: 'This is some content'},
    {title: 'Second Post', content: 'This is some content'},
    {title: 'Third Post', content: 'This is some content'},
    {title: 'Fourth Post', content: 'This is some content'},
    {title: 'Fifth Post', content: 'This is some content'},
    {title: 'Sixth Post', content: 'This is some content'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
