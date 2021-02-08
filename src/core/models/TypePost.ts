export class TypePost {
  _id: any;
  description: string;

  constructor(init?: Partial<TypePost>) {
    Object.assign(this, init);
  }
}
