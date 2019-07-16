import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

}
