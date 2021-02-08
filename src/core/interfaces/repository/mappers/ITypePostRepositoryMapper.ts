import { ITypePostSchema } from "../../../../repository/schema/ArticleSchema";
import { TypePost } from "../../../models/TypePost";

export interface ITypePostRepositoryMapper {
  mapArticles(articleSchema: ITypePostSchema[]): TypePost[];
  mapArticle(articleSchema: ITypePostSchema): TypePost;
}
