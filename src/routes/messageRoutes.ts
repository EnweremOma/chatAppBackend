import express from 'express';
import { Schema, ValidateSchema } from '../middleware/ValidateSchema';
import controller from '../controllers/MessageController';

const router = express.Router();

router.post('/create', ValidateSchema(Schema.message.create), controller.createMessage);
router.get('/get/:messageId', controller.getMessage);
router.get('/get/', controller.getAll);
router.put('/update/:messageId', ValidateSchema(Schema.message.update), controller.updateMessage);
router.delete('/delete/:messageId', controller.deleteMessage);

export = router;
