import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Subject, BehaviorSubject } from 'rxjs';
// import 'rxjs';


// declare var $: any;

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})


export class PostsComponent implements OnInit {

    priceValue: number = 0;
    postList$: Observable<IPost[]>;
    term$: BehaviorSubject<string> = new BehaviorSubject("");

    constructor(private _postService: PostService) {
        this.postList$ = Observable.combineLatest(
            this._postService.posts$,
            this.term$,
            (posts: Array<IPost>, term: string) => {
                return term ? posts.filter((post: IPost) => post.category == term) : posts;
            }
        )
    }

    ngOnInit() {
        // this._postService.loadAllPosts();
        /*this.postList$.subscribe(posts => {
            console.log('posts', posts);
        })*/
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