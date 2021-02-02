import mongoose, { Schema, model } from "mongoose";

export interface User extends mongoose.Document {
  name: String;
  lastName: String;
  user: String;
  password: String;
}

const UserShema = new Schema({
  name: String,
  lastName: String,
  user: String,
  password: String,
});

export default model<User>("User", UserShema);
