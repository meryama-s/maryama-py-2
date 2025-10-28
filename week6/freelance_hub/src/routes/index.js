import { Router } from 'express';
import authModule from '../modules/auth/index.js';
import projectsModule from '../modules/project/index.js';

const router = Router();

router.use('/auth', authModule);
router.use('/projects', projectsModule);

export default router;
