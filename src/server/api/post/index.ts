import * as express from 'express';
import postController from './post.controller';
import * as auth from '../../auth/auth.service';
import * as multer from 'multer';



const router: express.Router = express.Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', auth.isAuthenticated(), postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

export default router;