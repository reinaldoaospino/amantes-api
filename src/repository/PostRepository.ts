import { injectable } from "inversify";
import { IPostRepository } from "../core/interfaces/repository/IPostRepository";
import { Post } from "../core/models/Post";
import PostShema from "./schema/PostShema";

@injectable()
export class PostRepository implements IPostRepository {
  constructor() {}

  async getAll(): Promise<Post[]> {
    const response = await PostShema.find();

    var posts = new Array<Post>();

    response.forEach((data) => {
      var post = new Post({
        _id: data.id,
        title: data.title,
        content: data.content,
        type: data.type,
        img: data.img,
        main: data.main,
      });

      posts.push(post);
    });

    return posts;
  }

  async get(id: string): Promise<Post> {
    const response = await PostShema.findById(id);

    return new Post({
      title: response?.title,
      content: response?.content,
      img: response?.img,
      main: response?.main,
    });
  }

  async create(post: Post): Promise<void> {
    console.log(post);
    await PostShema.create({
      title: post.title,
      content: post.content,
      type: post.type,
      img: post.img,
      main: post.main,
      publicAt: post.publicAt,
    });
  }

  async update(post: Post): Promise<void> {
    await PostShema.findByIdAndUpdate(post._id, post);
  }

  async delete(id: string): Promise<void> {
    await PostShema.findByIdAndDelete(id);
  }
}
