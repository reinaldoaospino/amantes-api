import { Request } from "express";
import { inject } from "inversify";
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
} from "inversify-express-utils";
import { IPostController } from "../core/interfaces/controllers/IPostController";
import { IPostMapper } from "../core/interfaces/controllers/mappers/IPostMapper";
import { IPostService } from "../core/interfaces/services/IPostService";
import { TYPES } from "../core/inversify/types";
import { Post } from "../core/models/Post";
import { OperationResponse } from "../core/models/reponse/OperationResponse";

@controller("/api/post")
export class PostController implements IPostController {
  _service: IPostService;
  _postMapper: IPostMapper;

  constructor(
    @inject(TYPES.IPostService) service: IPostService,
    @inject(TYPES.IPostMapper) postMapper: IPostMapper
  ) {
    this._service = service;
    this._postMapper = postMapper;
  }

  @httpGet("/")
  async getAll(req: Request): Promise<Post[]> {
    return await this._service.getAll();
  }

  @httpGet("/:id")
  async get(req: Request): Promise<Post> {
    const { id } = req.params;
    return await this._service.get(id);
  }

  @httpPost("/")
  async create(req: Request): Promise<OperationResponse> {
    const post = this._postMapper.map(req);
    return await this._service.create(post);
  }

  @httpPut("/")
  async update(req: Request): Promise<OperationResponse> {
    const post = this._postMapper.map(req);
    return await this._service.update(post);
  }

  @httpDelete("/:id")
  async delete(req: Request): Promise<OperationResponse> {
    const { id } = req.params;
    return await this._service.delete(id);
  }
}
