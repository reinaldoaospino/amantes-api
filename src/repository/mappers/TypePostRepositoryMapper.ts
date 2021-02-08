import { injectable } from "inversify";
import { ITypePostRepositoryMapper } from "../../core/interfaces/repository/mappers/ITypePostRepositoryMapper";
import { TypePost } from "../../core/models/TypePost";
import { ITypePostSchema } from "../schema/ArticleSchema";

@injectable()
export class TypePostRepositoryMapper implements ITypePostRepositoryMapper {
  mapArticles(articleSchema: ITypePostSchema[]): TypePost[] {
    var articles = new Array<TypePost>();

    articleSchema.forEach(data => {
      var article = new TypePost({
        _id: data.id,
        description: data.description
      });

      articles.push(article);
    });

    return articles;
  }

  mapArticle(articleSchema: ITypePostSchema): TypePost {
    return new TypePost({
      _id: articleSchema?.id,
      description: articleSchema?.description
    });
  }
}
