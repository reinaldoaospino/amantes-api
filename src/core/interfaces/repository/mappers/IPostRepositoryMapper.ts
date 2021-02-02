import { Post } from "../../../models/Post";
import { IPostSchema } from "../../../../repository/schema/PostShema";

export interface IPostRepositoryMapper {
  mapPosts(postSchema: IPostSchema[]): Post[];
  mapPost(postSchema: IPostSchema): Post;
}
