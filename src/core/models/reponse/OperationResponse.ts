export class OperationResponse {
  correct: boolean;
  constructor(init?: Partial<OperationResponse>) {
    Object.assign(this, init);
  }
}
