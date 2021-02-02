import { Request } from "express";
import { Post } from "../../../models/Post";

export interface IPostMapper {
    map(req: Request): Post;
}