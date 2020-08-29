import express from 'express';
import retrieveControllers from '../../../utils/retrieveControllers';
import tokenValidationMiddleware from '../../../middlewares/tokenValidationMiddleware';
import userMiddleware from '../../../middlewares/userMiddleware';

const router = express.Router();
const routerName = __filename.split(/\\routers|\/routers/)[1].split('.')[0];
const controllers = retrieveControllers(routerName);

//  Example APIs
router.get(
  '/',
  tokenValidationMiddleware,
  userMiddleware,
  controllers.retrieveInfo,
);
router.post('/', tokenValidationMiddleware, controllers.newUser);

export default router;
