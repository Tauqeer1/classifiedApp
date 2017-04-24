import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {
    
    title: string = "Posts Component";
    postList: Array<Object>;

    constructor(private _postService: PostService) {
        this._postService.posts$.subscribe(posts => {
            console.log('posts', posts);
            this.postList = posts;
        })
    }

    ngOnInit() {
        this._postService.loadAllPosts();
    }

}