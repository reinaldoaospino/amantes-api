import { inject, injectable } from "inversify";
import { ITypePostRepository } from "../core/interfaces/repository/ITypePostRepository";
import { ITypePostService } from "../core/interfaces/services/ITypePostService";
import { TYPES } from "../core/inversify/types";
import { TypePost } from "../core/models/TypePost";
import { OperationResponse } from "../core/models/reponse/OperationResponse";

@injectable()
export class TypePostService implements ITypePostService {
  _repository: ITypePostRepository;

  constructor(
    @inject(TYPES.ITypePostRepository) repository: ITypePostRepository
  ) {
    this._repository = repository;
  }

  getAll(): Promise<TypePost[]> {
    return this._repository.getAll();
  }

  get(id: string): Promise<TypePost> {
    return this._repository.get(id);
  }

  async create(article: TypePost): Promise<OperationResponse> {
    await this._repository.create(article);
    
    return new OperationResponse({ correct: true });
  }

  async update(article: TypePost): Promise<OperationResponse> {
    await this._repository.update(article);

    return new OperationResponse({ correct: true });
  }

  async delete(id: string): Promise<OperationResponse> {
    await this._repository.delete(id);
    
    return new OperationResponse({ correct: true });
  }
}
