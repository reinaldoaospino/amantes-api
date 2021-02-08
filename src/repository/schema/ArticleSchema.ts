import mongoose, { Schema, model } from "mongoose";

export interface ITypePostSchema extends mongoose.Document {
  description: string;
}

const TypePostSchema = new Schema(
  {
    description: String
  },
  {
    versionKey: false
  }
);

export default model<ITypePostSchema>("TypePost", TypePostSchema);
