import mongoose, { Document, Model } from "mongoose";

const Schema = mongoose.Schema;

// These fields represent fields of collection
// and name of the collection is Employee
export interface IUser {
  name: string;
  email: string;
  avatar?: string;
  age?: number;
}

export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

// 3. Create a Model.
export const User = mongoose.model<IUserDocument>("User", userSchema);
