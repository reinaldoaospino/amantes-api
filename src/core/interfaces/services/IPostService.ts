import { Post } from "../../models/Post";
import { OperationResponse } from "../../models/reponse/OperationResponse";

export interface IPostService {
  getAll(): Promise<Post[]>;
  get(id: string): Promise<Post>;
  create(post: Post): Promise<OperationResponse>;
  update(post: Post): Promise<OperationResponse>;
  delete(id: string): Promise<OperationResponse>;
}
