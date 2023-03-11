import express from 'express';
import { Schema, ValidateSchema } from '../middleware/ValidateSchema';
import controller from '../controllers/UserController';

const router = express.Router();

router.post('/createUser', ValidateSchema(Schema.user.create), controller.createUser);
router.get('/getSingleUser/:userId', controller.getUser);
router.get('/getAllUsers/', controller.getAll);
router.put('/updateUser/:userId', ValidateSchema(Schema.user.update), controller.updateUser);
router.delete('/deleteUser/:userId', controller.deleteUser);

export = router;
