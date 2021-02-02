import { StatusResponse } from "./ErrorResponse";

export class ResponseBase<T> {
  data : T;
  status?: StatusResponse;
  
  constructor(init?: Partial<ResponseBase<T>>) {
    Object.assign(this, init);
  }
}
