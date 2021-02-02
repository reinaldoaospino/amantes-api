import { injectable } from "inversify";
import { IPostRepositoryMapper } from "../../core/interfaces/repository/mappers/IPostRepositoryMapper";
import { Post } from "../../core/models/Post";
import { IPostSchema } from "../schema/PostShema";

@injectable()
export class PostRepositoryMapper implements IPostRepositoryMapper {
  mapPosts(postSchema: IPostSchema[]): Post[] {
    var posts = new Array<Post>();

    postSchema.forEach(data => {
      var post = new Post({
        _id: data._id,
        title: data.title,
        content: data.content,
        type: data.type,
        img: data.img,
        main: data.main
      });

      posts.push(post);
    });

    return posts;
  }

  mapPost(postSchema: IPostSchema): Post {
    return new Post({
      title: postSchema?.title,
      content: postSchema?.content,
      img: postSchema?.img,
      main: postSchema?.main
    });
  }
}
