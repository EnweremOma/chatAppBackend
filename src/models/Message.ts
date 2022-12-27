import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage {
    content: string;
    user: string;
}

export interface IMessageModel extends IMessage, Document {}

const MessageSchema: Schema = new Schema(
    {
    content: {
        type: String,
        trim: true,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    },
    {
        timestamps: true
    } 
    
);


export default mongoose.model<IMessageModel>('Message', MessageSchema);
