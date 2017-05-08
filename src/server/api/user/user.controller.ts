import * as auth from '../../auth/auth.service';
import User from './user.model';
import config from '../../config/config';

export default {
    index(req, res) {

    },
    show(req, res) {

    },
    create(req, res) {
        User.findOne({ email: req.body.email })
            .exec((err, userObj) => {
                if (err) {
                    return res.json({ success: false, data: null, error: err });
                }
                else if (userObj == null) {
                    let user = {
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password
                    };
                    User.create(user)
                        .then(user => {
                            return res.json({ success: true, data: 'User created', error: null });
                        })
                        .catch(err => {
                            console.error('err', err);
                            return res.json({ success: false, data: null, error: err });
                        });
                }
                else {
                    return res.json({ success: false, data: null, error: 'User already exists' });
                }
            });
    },
    update(req, res) {
        let user = req.body;
        User.findById({_id: req.params.id})
            .exec((err, userObj) => {
                if(err){

                }
                console.log('userObj', userObj);
                /*userObj = user;
                userObj.save((err, user) => {

                })*/
            })
        /*User.update({ _id: req.params.id }, user)
            .exec((err, userObj) => {
                if(err) {
                    console.log('err', err);
                }
                else {
                    console.log('userObj', userObj);
                }
            })*/
    },
    delete(req, res) {

    },
    me(req, res) {
        res.json({ status: true, data: req.user, error: null });
    }
};