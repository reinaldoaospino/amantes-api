import mongoose, { Schema, model } from "mongoose";

export interface Post extends mongoose.Document {
  title: string;
  content: string;
  type   : string;
  publicAt: Date;
  img: string;
  main: boolean;
}

const PostShema = new Schema(
  {
    title   : String,
    content : String,
    type    : String,
    publicAt: {type: Date, default: Date.now},
    img     :  String,
    main    : Boolean,
  },
  {
    versionKey: false,
  }
);

export default model<Post>("Post", PostShema);
