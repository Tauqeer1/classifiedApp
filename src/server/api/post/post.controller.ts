import * as auth from '../../auth/auth.service';
import Post from './post.model';
import config from '../../config/config';

export default {
    index(req, res) {
        Post.find({})
            .exec((err, posts) => {
                if(err) {
                    return res.status(400).json({ success: false, data: null, error: err });
                }
                return res.status(200).json({success: true, data: posts, error: null});
            });
    },
    show(req, res) {

    },
    create(req, res) {
        console.log('req.body', req.body);
        let post = {
            category: req.body.category,
            ad_title: req.body.adTitle,
            brand_name: req.body.brandName,
            brand_description: req.body.brandDescription,
            posted_by: req.user._id,
            images: req.body.image,
            price: req.body.price
        };
        console.log('post', post);
        Post.create(post)
            .then(post => {
                console.log('post', post);
                return res.status(200).json({ success: true, data: post, error: null });
            })
            .catch(err => {
                console.error('err', err);
                return res.status(400).json({ success: false, data: null, error: err });
            });

    },
    update(req, res) {

    },
    delete(req, res) {

    }
};