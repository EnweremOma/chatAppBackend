import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Response, Request } from 'express';
import { IUser } from '../models/User';
import { IMessage } from '../models/Message';
import { IGroup } from '../models/Group';

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            console.log(error);
            return res.status(422).json({ error });
        }
    };
};

export const Schema = {
    user: {
        create: Joi.object<IUser>({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            phoneNumber: Joi.string().required(),
            email: Joi.string().required(),
            category: Joi.string().required(),
            imgURL: Joi.string(),
            department: Joi.string().required(),
            courseTitle: Joi.string().required(),
            about: Joi.string()
        }),
        update: Joi.object<IUser>({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            phoneNumber: Joi.string().required(),
            email: Joi.string().required(),
            category: Joi.string().required(),
            imgURL: Joi.string(),
            department: Joi.string().required(),
            courseTitle: Joi.string().required(),
            about: Joi.string()
        })
    },
    message: {
        create: Joi.object<IMessage>({
            user: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            content: Joi.string().required()
        }),
        update: Joi.object<IMessage>({
            user: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            content: Joi.string().required()
        })
    },
    group: {
        create: Joi.object<IGroup>({
            user: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            message: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            groupName: Joi.string().required(),
            content: Joi.string().required()
        }),
        update: Joi.object<IGroup>({
            user: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            message: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            groupName: Joi.string().required(),
            content: Joi.string().required()
        })
    }
};
