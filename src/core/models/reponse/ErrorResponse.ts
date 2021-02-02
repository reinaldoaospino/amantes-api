export class StatusResponse {
    code : number;
    message: string
    constructor(init?: Partial<StatusResponse>){
        Object.assign(this,init)
    }
}
