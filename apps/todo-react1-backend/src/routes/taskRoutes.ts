import { Router } from 'express';
import TaskController from '../controllers/taskController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware); // All task routes are protected

router.post('/', TaskController.createTask);
router.get('/', TaskController.getTasks);
router.put('/:taskId', TaskController.updateTask);
router.delete('/:taskId', TaskController.deleteTask);

export default router;