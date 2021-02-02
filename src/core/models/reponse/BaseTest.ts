import { StatusResponse } from "./ErrorResponse";

export class BaseTest {
  status?: StatusResponse;

  constructor(init?: Partial<BaseTest>) {
    Object.assign(this, init);
  }
}
