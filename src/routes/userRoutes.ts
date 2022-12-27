import express from 'express';
import { Schema, ValidateSchema } from '../middleware/ValidateSchema';
import controller from '../controllers/UserController';

const router = express.Router();

router.post('/create', ValidateSchema(Schema.user.create), controller.createUser);
router.get('/get/:userId', controller.getUser);
router.get('/get/', controller.getAll);
router.put('/update/:userId', ValidateSchema(Schema.user.update), controller.updateUser);
router.delete('/delete/:userId', controller.deleteUser);

export = router;
