import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { IPost } from '../models';

@Injectable()
export class PostService {

    posts$: BehaviorSubject<Array<IPost>> = new BehaviorSubject([]);
    private posts: Array<IPost>;
    constructor(private _hs: HttpService) {
        this.loadAllPosts();
     }


    addPost(post: Object) {
        this._hs.PostRequest('/api/posts', post)
            .subscribe(res => {
                this.posts = this.posts$.getValue();
                this.posts.push(res.data);
                this.posts$.next(this.posts);
            })
    }
    loadAllPosts() {
        this._hs.GetRequest('/api/posts')
            .subscribe(res => {
                if (res.success) {
                    let posts = res['data'];
                    this.posts$.next(posts);
                }
            });
    }
}