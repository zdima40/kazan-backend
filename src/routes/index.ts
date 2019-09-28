import { Router } from 'express';
import { getMain, getApi } from '../controllers/index.controller';

const router = Router();

router.route('/').get(getMain);
router.route('/api').get(getApi);

export default router;