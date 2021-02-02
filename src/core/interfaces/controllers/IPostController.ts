import { Request } from "express";
import { Post } from "../../models/Post";
import { OperationResponse } from "../../models/reponse/OperationResponse";

export interface IPostController {
  getAll(req: Request): Promise<Post[]>;
  get(req: Request): Promise<Post>;
  create(req: Request): Promise<OperationResponse>;
  update(req: Request): Promise<OperationResponse>;
  delete(req: Request): Promise<OperationResponse>;
}
