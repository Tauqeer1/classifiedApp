import { Component } from '@angular/core';
import { PostService } from '../../services';

@Component({
    selector: 'add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})


export class AddPostComponent {

    constructor(private _postService: PostService) { }

    addPost(valid, value) {
        if (!valid) {
            return;
        }
        console.log('value', value);
        this._postService.addPost(value);
            /*.subscribe(post => {
                console.log('post',post);
                this._postService.post$.next(post.data);
            }, err => {
                console.error('err', err.json());
            })*/
    }
}