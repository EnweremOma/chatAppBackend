import express from 'express';
import { Schema, ValidateSchema } from '../middleware/ValidateSchema';
import controller from '../controllers/GroupController';

const router = express.Router();

router.post('/create', ValidateSchema(Schema.group.create), controller.createGroup);
router.get('/get/:groupId', controller.getGroup);
router.get('/get/', controller.getAll);
router.put('/update/:groupId', ValidateSchema(Schema.group.update), controller.updateGroup);
router.delete('/delete/:groupId', controller.deleteGroup);

export = router;
