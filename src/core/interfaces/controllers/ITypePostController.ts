import { Request } from "express";
import { TypePost } from "../../models/TypePost";
import { OperationResponse } from "../../models/reponse/OperationResponse";

export interface ITypePostController {
    getAll(req: Request): Promise<TypePost[]>;
    get(req: Request): Promise<TypePost>;
    create(req: Request): Promise<OperationResponse>;
    update(req: Request): Promise<OperationResponse>;
    delete(req: Request): Promise<OperationResponse>;
}
