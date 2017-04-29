import { Component } from '@angular/core';
import { PostService } from '../../services';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})


export class AddPostComponent {

    file: File;
    image: string;
    constructor(private _postService: PostService, private http: Http) { }

    addPost(valid, value) {
        if (!valid) {
            return;
        }
        if (this.file) {
            console.log('value', value);
            console.log('image', this.image);
            value['image'] = this.image;
            console.log('value', value);
            this._postService.addPost(value);
        }
        else {
            console.log('value', value);
            this._postService.addPost(value);
        }
    }

    getFile(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
            let fileReader: FileReader = new FileReader();
            fileReader.onload = (e) => {
                this.image = fileReader.result;
            }
            fileReader.readAsDataURL(this.file);
        }
    }
}