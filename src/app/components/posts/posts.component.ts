import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Subject } from 'rxjs/Subject';
// import 'rxjs';


// declare var $: any;

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})


export class PostsComponent implements OnInit {

    priceValue: number = 0;
    postList: IPost[];
    
    constructor(private _postService: PostService) {
        this._postService.posts$.subscribe(posts => {
            this.postList = posts;
        });
    }

    ngOnInit() {
        this._postService.loadAllPosts();
        /*console.log('sliderValue initial ', this.sliderValue);
        
        $('#pr1').on('change', (event) => {
            this.sliderValue = event.value['newValue'];
            console.log('this.sliderValue', this.sliderValue);
        });*/

    }

    /*changeValue(term) {
        Observable.from(this.postList)
            .debounceTime(1000)
            .distinctUntilChanged()
            .filter((value: any) =>  term == value.category)
            .subscribe(results => {
                console.log('results', results);
                this.postList.push(results);
            })
    }*/
}