import mongoose, { Document, Schema } from 'mongoose';

export interface IGroup {
    groupName: string;
    content: string;
    user: string;
    message: string;
}

export interface IGroupModel extends IGroup, Document {}

const groupSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        message: {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        },
        groupName: {
            type: String,
            trim: true,
            required: true
        },
        content: {
            type: String,
            trim: true,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IGroupModel>('Group', groupSchema);
