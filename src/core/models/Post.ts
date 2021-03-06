import { BaseTest } from "./reponse/BaseTest";

export class Post extends BaseTest {
  _id     : any;
  title   : string;
  content : string;
  _idType    : string;
  publicAt: Date;
  img     : string;
  main    : boolean;

  constructor(init?: Partial<Post>) {
    super();
    Object.assign(this, init);
  }
}
