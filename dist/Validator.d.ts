import { Request } from 'express';
export declare class Validator {
    private requiredFields;
    constructor(requiredFields: string[]);
    validateRequestBody(req: Request): boolean;
    validateRequestParams(req: Request): boolean;
}
