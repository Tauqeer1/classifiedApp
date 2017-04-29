import * as express from 'express';
import postController from './post.controller';
import * as auth from '../../auth/auth.service';
import * as multer from 'multer';

/*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})*/


const router: express.Router = express.Router();
/*const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log('req destination', req.file);
            console.log('file destinations', file);
            // return './uploads/';
            cb(null, './uploads/')
        },
        filename: (req, file, cb) => {
            console.log('filename', req.file);
            console.log('file filename', file);
            // return file.fieldname + '-' + Date.now();
            cb(null, file.fieldname + '-' + Date.now())
        }
    })
})*/
// const upload = multer({dest: './uploads/'});
router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', auth.isAuthenticated(), postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

export default router;