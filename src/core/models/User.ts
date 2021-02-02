export class UserModel {
  name    : string;
  lastName: string;
  user    : string;
  password: string;

  constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}
