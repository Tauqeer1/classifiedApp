import * as express from 'express';
import userController from './user.controller';


const router: express.Router = express.Router();


router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;