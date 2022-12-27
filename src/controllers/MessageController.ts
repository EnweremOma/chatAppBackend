import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Message from '../models/Message';

const createMessage = (req: Request, res: Response, next: NextFunction) => {
    const { user, content } = req.body;

    const message = new Message({
        _id: new mongoose.Types.ObjectId(),
        user,
        content
    });

    return message
        .save()
        .then((message) => res.status(201).json({ message }))
        .catch((error) => res.status(500).json({ error }));
};

const getMessage = (req: Request, res: Response, next: NextFunction) => {
    const messageId = req.params.messageId;

    return Message.findById(messageId)
        .populate('user')
        .then((message) => (message ? res.status(200).json({ message }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
    return Message.find()
        .populate('user')
        .then((messages) => res.status(200).json({ messages }))
        .catch((error) => res.status(500).json({ error }));
};

const updateMessage = (req: Request, res: Response, next: NextFunction) => {
    const messageId = req.params.messageId;

    return Message.findById(messageId)
        .then((message) => {
            if (message) {
                message.set(req.body);

                return message
                    .save()
                    .then((message) => res.status(201).json({ message }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteMessage = (req: Request, res: Response, next: NextFunction) => {
    const messageId = req.params.messageId;

    return Message.findByIdAndDelete(messageId)
        .then((message) => (message ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createMessage, getMessage, getAll, updateMessage, deleteMessage };
