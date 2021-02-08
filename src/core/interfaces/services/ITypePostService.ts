import { TypePost } from "../../models/TypePost";
import { OperationResponse } from "../../models/reponse/OperationResponse";

export interface ITypePostService {
    getAll(): Promise<TypePost[]>;
    get(id: string): Promise<TypePost>;
    create(article: TypePost): Promise<OperationResponse>;
    update(article: TypePost): Promise<OperationResponse>;
    delete(id: string): Promise<OperationResponse>;
}
