import { Container } from "inversify";
import "reflect-metadata";
import { ILoginController } from "../interfaces/controllers/IUserController";
import { TYPES } from "./types";
import { IUserService } from "../interfaces/services/IUserService";
import { UserService } from "../../services/UserService";
import IUserRepository from "../interfaces/repository/IUserRepository";
import { UserRepository } from "../../repository/UserRepository";
import { PostRepository } from "../../repository/PostRepository";
import { IPostRepository } from "../interfaces/repository/IPostRepository";
import { IPostService } from "../interfaces/services/IPostService";
import { PostService } from "../../services/PostService";
import { IPostController } from "../interfaces/controllers/IPostController";
import { PostController } from "../../controllers/PostController";
import { LoginController } from "../../controllers/LoginController";
import { IPostMapper } from "../interfaces/controllers/mappers/IPostMapper";
import { PostMapper } from "../../controllers/mappers/PostMapper";
import { IPostRepositoryMapper } from "../interfaces/repository/mappers/IPostRepositoryMapper";
import { PostRepositoryMapper } from "../../repository/mappers/PostRepositoryMapper";
import { ITypePostController } from "../interfaces/controllers/ITypePostController";
import { TypePostController } from "../../controllers/TypePostController";
import { ITypePostService } from "../interfaces/services/ITypePostService";
import { TypePostService } from "../../services/TypePostService";
import { ITypePostMapper } from "../interfaces/controllers/mappers/ITypePostMapper";
import { TypePostMapper } from "../../controllers/mappers/TypePostMapper";
import { ITypePostRepository } from "../interfaces/repository/ITypePostRepository";
import { TypePostRepository } from "../../repository/TypePostRepository";
import { ITypePostRepositoryMapper } from "../interfaces/repository/mappers/ITypePostRepositoryMapper";
import { TypePostRepositoryMapper } from "../../repository/mappers/TypePostRepositoryMapper";

const myContainer = new Container();

//Controllers
myContainer.bind<IPostController>(TYPES.IPostController).to(PostController);
myContainer.bind<ILoginController>(TYPES.ILoginController).to(LoginController);
myContainer.bind<ITypePostController>(TYPES.ITypePostController).to(TypePostController);


//Services
myContainer.bind<IPostService>(TYPES.IPostService).to(PostService);
myContainer.bind<IPostRepository>(TYPES.IPostRepository).to(PostRepository);
myContainer.bind<ITypePostService>(TYPES.ITypePostService).to(TypePostService);



//Repositories
myContainer.bind<IUserService>(TYPES.IUserService).to(UserService);
myContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
myContainer.bind<ITypePostRepository>(TYPES.ITypePostRepository).to(TypePostRepository);

//Mappers
myContainer.bind<IPostMapper>(TYPES.IPostMapper).to(PostMapper);
myContainer.bind<ITypePostMapper>(TYPES.ITypePostMapper).to(TypePostMapper);

myContainer.bind<IPostRepositoryMapper>(TYPES.IPostRepositoryMapper).to(PostRepositoryMapper);

myContainer.bind<ITypePostRepositoryMapper>(TYPES.ITypePostRepositoryMapper).to(TypePostRepositoryMapper);

export { myContainer };
