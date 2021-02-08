import { inject, injectable } from "inversify";
import { ITypePostRepository } from "../core/interfaces/repository/ITypePostRepository";
import { ITypePostRepositoryMapper } from "../core/interfaces/repository/mappers/ITypePostRepositoryMapper";
import { TYPES } from "../core/inversify/types";
import { TypePost } from "../core/models/TypePost";
import TypePostSchema from "./schema/ArticleSchema";

@injectable()
export class TypePostRepository implements ITypePostRepository {
  _mapper: ITypePostRepositoryMapper;

  constructor(
    @inject(TYPES.ITypePostRepositoryMapper) mapper: ITypePostRepositoryMapper
  ) {
    this._mapper = mapper;
  }

  async getAll(): Promise<TypePost[]> {
    const response = await TypePostSchema.find();

    return this._mapper.mapArticles(response);
  }

  async get(id: string): Promise<TypePost> {
    const response = await TypePostSchema.findById(id);

    if (response) return this._mapper.mapArticle(response);

    throw new Error(`The type post with id ${id} doesn't exist`)
  }

  async create(typepost: TypePost): Promise<void> {
    await TypePostSchema.create({
      description: typepost.description,
    });
  }

  async update(typepost: TypePost): Promise<void> {
    const result = await TypePostSchema.findByIdAndUpdate(
      typepost._id,
      typepost
    );

    if (!result) {
      throw new Error("The typepost doesn't exist");
    }
  }

  async delete(id: string): Promise<void> {
    const result = await TypePostSchema.findByIdAndDelete(id);

    if (!result) {
      throw new Error("The typepost doesn't exist");
    }
  }
}
