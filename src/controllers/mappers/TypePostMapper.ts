import { Request } from "express";
import { injectable } from "inversify";
import { ITypePostMapper } from "../../core/interfaces/controllers/mappers/ITypePostMapper";
import { TypePost } from "../../core/models/TypePost";

@injectable()
export class TypePostMapper implements ITypePostMapper {
  map(req: Request): TypePost {
    const { _id, description } = req.body;

    return new TypePost({
      _id,
      description
    });
  }
}
