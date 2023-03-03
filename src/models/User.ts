import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
    name: string;
    phoneNumber: string;
    email: string;
    category: [string];
    imgURL: string;
    department: string;
    courseTitle: string;
    about: string;
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
            enum: ['Admin', 'Lecturer', 'Student', 'Guest']
        },
        department: {
            type: String,
            trim: true
        },
         courseTitle: {
            type: String,
            trim: true
        },
          about: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUserModel>('User', UserSchema);
