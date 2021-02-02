import { inject, injectable } from "inversify";
import { IPostRepository } from "../core/interfaces/repository/IPostRepository";
import { IPostService } from "../core/interfaces/services/IPostService";
import { TYPES } from "../core/inversify/types";
import { Post } from "../core/models/Post";
import { OperationResponse } from "../core/models/reponse/OperationResponse";

@injectable()
export class PostService implements IPostService {
  _repository: IPostRepository;

  constructor(@inject(TYPES.IPostRepository) repository: IPostRepository) {
    this._repository = repository;
  }

  getAll(): Promise<Post[]> {
    return this._repository.getAll();
  }

  get(id: string): Promise<Post> {
    return this._repository.get(id);
  }

  async create(post: Post): Promise<OperationResponse> {
    await this._repository.create(post);

    return new OperationResponse({ correct: true });
  }

  async update(post: Post): Promise<OperationResponse> {
    await this._repository.update(post);

    return new OperationResponse({ correct: true });
  }

  async delete(id: string): Promise<OperationResponse> {
    await this._repository.delete(id);

    return new OperationResponse({ correct: true });
  }
}
