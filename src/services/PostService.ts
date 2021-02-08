import { inject, injectable } from "inversify";
import { IPostRepository } from "../core/interfaces/repository/IPostRepository";
import { ITypePostRepository } from "../core/interfaces/repository/ITypePostRepository";
import { IPostService } from "../core/interfaces/services/IPostService";
import { TYPES } from "../core/inversify/types";
import { Post } from "../core/models/Post";
import { OperationResponse } from "../core/models/reponse/OperationResponse";

@injectable()
export class PostService implements IPostService {
  private readonly _postRepository: IPostRepository;
  private readonly _typePostRepository: ITypePostRepository;

  constructor(
    @inject(TYPES.IPostRepository) postRepository: IPostRepository,
    @inject(TYPES.ITypePostRepository) typePostRepository: ITypePostRepository
  ) {
    this._postRepository = postRepository;
    this._typePostRepository = typePostRepository;
  }

  getAll(): Promise<Post[]> {
    return this._postRepository.getAll();
  }

  get(id: string): Promise<Post> {
    return this._postRepository.get(id);
  }

  async create(post: Post): Promise<OperationResponse> {
    await this._typePostRepository.get(post._idType);
    await this._postRepository.create(post);

    return new OperationResponse({ correct: true });
  }

  async update(post: Post): Promise<OperationResponse> {
    await this._postRepository.update(post);

    return new OperationResponse({ correct: true });
  }

  async delete(id: string): Promise<OperationResponse> {
    await this._postRepository.delete(id);

    return new OperationResponse({ correct: true });
  }
}
