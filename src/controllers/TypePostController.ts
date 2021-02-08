import { Request } from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { ITypePostController } from "../core/interfaces/controllers/ITypePostController";
import { ITypePostMapper } from "../core/interfaces/controllers/mappers/ITypePostMapper";
import { ITypePostService } from "../core/interfaces/services/ITypePostService";
import { TYPES } from "../core/inversify/types";
import { TypePost } from "../core/models/TypePost";
import { OperationResponse } from "../core/models/reponse/OperationResponse";

@controller("/api/typepost")
export class TypePostController implements ITypePostController {
  _service: ITypePostService;
  _mapper: ITypePostMapper;

  constructor(
    @inject(TYPES.ITypePostService) service: ITypePostService,
    @inject(TYPES.ITypePostMapper) mapper: ITypePostMapper
  ) {
    this._service = service;
    this._mapper = mapper;
  }

  @httpGet("/")
  async getAll(req: Request): Promise<TypePost[]> {
    return await this._service.getAll();
  }

  @httpGet("/:id")
  async get(req: Request): Promise<TypePost> {
    const { id } = req.params;

    return await this._service.get(id);
  }

  @httpPost("/")
  async create(req: Request): Promise<OperationResponse> {
    const article = this._mapper.map(req);
    return await this._service.create(article);
  }

  @httpPut("/")
  async update(req: Request): Promise<OperationResponse> {
    const article = this._mapper.map(req);
    return await this._service.update(article);
  }

  @httpDelete("/:id")
  async delete(req: Request): Promise<OperationResponse> {
    const { id } = req.params;

    return await this._service.delete(id);
  }
}
