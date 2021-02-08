import { Request } from "express";
import { TypePost } from "../../../models/TypePost";

export interface ITypePostMapper {
    map(req: Request): TypePost;
}
