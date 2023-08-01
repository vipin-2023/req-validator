// src/index.js
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
    validateRequestQuery(req) {
      for (const field of this.requiredFields) {
        if (!req.query[field]) {
          return false;
        }
      }
      return true;
    }
  }
  
  export default Validator;
  