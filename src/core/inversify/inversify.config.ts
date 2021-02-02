import { Container } from "inversify";
import "reflect-metadata";
import { ILoginController } from "../interfaces/controllers/IUserController";
import { TYPES } from "./types";
import { IUserService } from "../interfaces/services/IUserService";
import { UserService } from "../../services/UserService";
import IUserRepository from "../interfaces/repository/IUserRepository";
import { UserRepository } from "../../repository/UserRepository";
import { OperationResponse } from "../models/reponse/OperationResponse";
import { PostRepository } from "../../repository/PostRepository";
import { IPostRepository } from "../interfaces/repository/IPostRepository";
import { IPostService } from "../interfaces/services/IPostService";
import { PostService } from "../../services/PostService.ts";
import { IPostController } from "../interfaces/controllers/IPostController";
import { PostController } from "../../controllers/PostController";
import { LoginController } from "../../controllers/LoginController";
import { IPostMapper } from "../interfaces/controllers/mappers/IPostMapper";
import { PostMapper } from "../../controllers/mappers/PostMapper";
import { IPostRepositoryMapper } from "../interfaces/repository/mappers/IPostRepositoryMapper";
import { PostRepositoryMapper } from "../../repository/mappers/PostRepositoryMapper";

const myContainer = new Container();

//Controllers
myContainer.bind<IPostController>(TYPES.IPostController).to(PostController);
myContainer.bind<ILoginController>(TYPES.ILoginController).to(LoginController);


//Services
myContainer.bind<IPostService>(TYPES.IPostService).to(PostService);
myContainer.bind<IPostRepository>(TYPES.IPostRepository).to(PostRepository);


//Repositories
myContainer.bind<IUserService>(TYPES.IUserService).to(UserService);
myContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);

//Mappers
myContainer.bind<IPostMapper>(TYPES.IPostMapper).to(PostMapper);
myContainer.bind<IPostRepositoryMapper>(TYPES.IPostRepositoryMapper).to(PostRepositoryMapper);

export { myContainer };
