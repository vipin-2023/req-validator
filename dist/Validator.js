"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    constructor(requiredFields) {
        this.requiredFields = requiredFields;
    }
    validateRequestBody(req) {
        for (const field of this.requiredFields) {
            if (!req.body[field]) {
                return false;
            }
        }
        return true;
    }
    validateRequestParams(req) {
        for (const field of this.requiredFields) {
            if (!req.params[field]) {
                return false;
            }
        }
        return true;
    }
}
exports.Validator = Validator;
