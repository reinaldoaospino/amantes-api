import { Post } from "../../models/Post";

export interface IPostRepository {
  getAll(): Promise<Post[]>;
  get(id: string): Promise<Post>;
  create(post: Post): Promise<void>;
  update(post: Post): Promise<void>;
  delete(id: string): Promise<void>;
}
