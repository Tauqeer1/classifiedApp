import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models';


declare var $: any;

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})


export class PostsComponent implements OnInit {

    title: string = "Posts Component";
    sliderValue: any = 10;
    postList: IPost[];

    constructor(private _postService: PostService, private zone: NgZone) {
        this._postService.posts$.subscribe(posts => {
            this.postList = posts;
        });
    }

    ngOnInit() {
        this._postService.loadAllPosts();
        console.log('sliderValue initial ', this.sliderValue);
        
        $('#pr1').on('change', (event) => {
            this.sliderValue = event.value['newValue'];
            console.log('this.sliderValue', this.sliderValue);
        });

    }
}