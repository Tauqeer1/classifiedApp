import * as express from 'express';
import userController from './user.controller';
import * as auth from '../../auth/auth.service';
import * as multer from 'multer';



const router: express.Router = express.Router();
const upload = multer({ dest: `upload/` }); 

router.get('/', userController.index);
router.get('/me',auth.isAuthenticated(), userController.me);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;