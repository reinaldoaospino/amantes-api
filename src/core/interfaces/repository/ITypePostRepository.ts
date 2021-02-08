import { TypePost } from "../../models/TypePost";

export interface ITypePostRepository {
    getAll(): Promise<TypePost[]>;
    get(id: string): Promise<TypePost>;
    create(typepost: TypePost): Promise<void>;
    update(typepost: TypePost): Promise<void>;
    delete(id: string): Promise<void>;
}
