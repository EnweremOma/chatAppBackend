import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Group from '../models/Group';

const createGroup = (req: Request, res: Response, next: NextFunction) => {
    const { user, message, groupName, content } = req.body;

    const group = new Group({
        _id: new mongoose.Types.ObjectId(),
        user,
        message,
        groupName,
        content
    });

    return group
        .save()
        .then((group) => res.status(201).json({ group }))
        .catch((error) => res.status(500).json({ error }));
};

const getGroup = (req: Request, res: Response, next: NextFunction) => {
    const groupId = req.params.groupId;

    return Group.findById(groupId)
        .then((group) => (group ? res.status(200).json({ group }) : res.status(404).json({ group: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
    return Group.find()
        .then((groups) => res.status(200).json({ groups }))
        .catch((error) => res.status(500).json({ error }));
};

const updateGroup = (req: Request, res: Response, next: NextFunction) => {
    const groupId = req.params.groupId;

    return Group.findById(groupId)
        .then((group) => {
            if (group) {
                group.set(req.body);

                return group
                    .save()
                    .then((group) => res.status(201).json({ group }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ group: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteGroup = (req: Request, res: Response, next: NextFunction) => {
    const groupId = req.params.groupId;

    return Group.findByIdAndDelete(groupId)
        .then((group) => (group ? res.status(201).json({ group: 'deleted' }) : res.status(404).json({ group: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createGroup, getGroup, getAll, updateGroup, deleteGroup };
