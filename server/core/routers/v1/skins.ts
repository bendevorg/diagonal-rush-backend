import express from 'express';
import retrieveControllers from '../../../utils/retrieveControllers';
import tokenValidationMiddleware from '../../../middlewares/tokenValidationMiddleware';

const router = express.Router();
const routerName = __filename.split(/\\routers|\/routers/)[1].split('.')[0];
const controllers = retrieveControllers(routerName);

router.get('/', tokenValidationMiddleware, controllers.retrieveSkinsList);

if (process.env.NODE_ENV !== 'production') {
  router.post('/', controllers.newSkin);
}

export default router;
