import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class PostService {

    constructor(private _hs: HttpService) {}


    addPost(post: Object) {
        return this._hs.PostRequest('/api/posts', post);
    }
}