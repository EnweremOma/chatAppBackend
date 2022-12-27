import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
    name: string;
    phoneNumber: string;
    email: string;
    category: [string];
    url: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        name: {
            type: String,
            trim: true
        },
        phoneNumber: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            trim: true
        },
        url: {
            type: String
        },
        category: {
            type: [String],
            enum: ['Admin', 'Lecturer', 'Student', 'Intending Student']
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUserModel>('User', UserSchema);
