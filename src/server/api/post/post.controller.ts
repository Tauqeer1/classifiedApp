import * as auth from '../../auth/auth.service';
import Post from './post.model';
import config from '../../config/config';

export default {
    index(req, res) {

    },
    show(req, res) {

    },
    create(req, res) {
        let post = {
            category: req.body.category,
            ad_title: req.body.adTitle,
            brand_name: req.body.brandName,
            brand_description: req.body.brandDescription,
            posted_by: req.user._id,
            price: req.body.price
        }
        Post.create(post)
            .then(post => {
                return res.json({ success: true, data: 'Post created', error: null });
            })
            .catch(err => {
                console.error('err', err);
                return res.json({ success: false, data: null, error: err });
            });

    },
    update(req, res) {

    },
    delete(req, res) {

    }
};