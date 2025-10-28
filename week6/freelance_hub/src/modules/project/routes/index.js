import { Router } from 'express';
import { auth } from '../../../middlewares/auth.js';
import { isAdmin, isOwnerOrAdmin } from '../../../middlewares/roles.js';
import { ProjectService } from '../services/index.js';

const router = Router();

//TODO: create project authenticated
router.post('/', auth, async (req, res) => {
try {
const payload = { ...req.body, owner: req.user.id };
const project = await ProjectService.create(payload);
res.status(201).json(project);
} catch (err) {
res.status(400).json({ message: err.message });
}
});


// list projects public
router.get('/', async (req, res) => {
const projects = await ProjectService.findAll();
res.json(projects);
});


// get single
router.get('/:id', async (req, res) => {
const project = await ProjectService.findById(req.params.id);
if (!project) return res.status(404).json({ message: 'Not found' });
res.json(project);
});


// update owner or admin
router.put('/:id', auth, isOwnerOrAdmin(async (req) => {
const proj = await ProjectService.findById(req.params.id);
return proj ? proj.owner : null;
}), async (req, res) => {
try {
const updated = await ProjectService.update(req.params.id, req.body);
res.json(updated);
} catch (err) {
res.status(400).json({ message: err.message });
}
});


// deleteadmin only
router.delete('/:id', auth, isAdmin, async (req, res) => {
await ProjectService.remove(req.params.id);
res.status(204).send();
});
export default router;