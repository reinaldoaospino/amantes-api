import { inject, injectable } from "inversify";
import { IPostRepository } from "../core/interfaces/repository/IPostRepository";
import { IPostRepositoryMapper } from "../core/interfaces/repository/mappers/IPostRepositoryMapper";
import { TYPES } from "../core/inversify/types";
import { Post } from "../core/models/Post";
import PostSchema from "./schema/PostShema";

@injectable()
export class PostRepository implements IPostRepository {
  _mapper: IPostRepositoryMapper;

  constructor(@inject(TYPES.IPostRepositoryMapper) mapper: IPostRepositoryMapper) {
    this._mapper = mapper;
  }

  async getAll(): Promise<Post[]> {
    const response = await PostSchema.find();

    return this._mapper.mapPosts(response);
  }

  async get(id: string): Promise<Post> {
    const response = await PostSchema.findById(id);

    return this._mapper.mapPost(response);
  }

  async create(post: Post): Promise<void> {    
    await PostSchema.create({
      title: post.title,
      content: post.content,
      type: post.type,
      img: post.img,
      main: post.main,
      publicAt: post.publicAt,
    });
  }

  async update(post: Post): Promise<void> {
    await PostSchema.findByIdAndUpdate(post._id, post);
  }

  async delete(id: string): Promise<void> {
    await PostSchema.findByIdAndDelete(id);
  }
}
