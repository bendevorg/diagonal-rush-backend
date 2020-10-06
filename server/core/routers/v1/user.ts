import express from 'express';
import retrieveControllers from '../../../utils/retrieveControllers';
import retrieveSchemas from '../../../utils/retrieveSchemas';
import tokenValidationMiddleware from '../../../middlewares/tokenValidationMiddleware';
import userMiddleware from '../../../middlewares/userMiddleware';

const router = express.Router();
const routerName = __filename.split(/\\routers|\/routers/)[1].split('.')[0];
const controllers = retrieveControllers(routerName);
const schemas = retrieveSchemas(routerName);

//  Example APIs
router.get(
  '/',
  tokenValidationMiddleware,
  userMiddleware,
  controllers.retrieveInfo,
);
router.post('/', tokenValidationMiddleware, controllers.newUser);
router.patch(
  '/level-completed',
  tokenValidationMiddleware,
  userMiddleware,
  schemas.levelCompleted,
  controllers.levelCompleted,
);
router.patch(
  '/levels-completed',
  tokenValidationMiddleware,
  userMiddleware,
  // schemas.levelCompleted,
  controllers.levelsCompleted,
);
router.get('/give-reward', schemas.giveReward, controllers.giveReward);
router.patch(
  '/unlock-skin',
  tokenValidationMiddleware,
  userMiddleware,
  schemas.unlockSkin,
  controllers.unlockSkin,
);

export default router;
