import { Request } from "express";
import { injectable } from "inversify";
import { IPostMapper } from "../../core/interfaces/controllers/mappers/IPostMapper";
import { Post } from "../../core/models/Post";

@injectable()
export class PostMapper implements IPostMapper {
  map(req: Request): Post {
    const { _id, title, content, _idType, publicAt, img, main } = req.body;
    return new Post({
      _id,
      title,
      content,
      _idType,
      publicAt,
      img,
      main,
    });
  }
}
