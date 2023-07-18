# vipinlumos-req-validator

[![npm version](https://badge.fury.io/js/vipinlumos-req-validator.svg)](https://badge.fury.io/js/vipinlumos-req-validator)

A simple request validator utility for validating request bodies and parameters.

## Installation

You can install the package using npm:

```bash
npm install vipinlumos-req-validator
``` 

## Usage
```js
const { Validator } = require('vipinlumos-req-validator');

// Create an instance of the Validator class with the required fields
const validator = new Validator(['username', 'email', 'password']);

// Example usage with Express.js
app.post('/example', (req, res) => {
  // Validate the request body
  const isValid = validator.validateRequestBody(req);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  // Handle valid request
  // ...
});
``` 

```js

// Example usage with Express.js to validate request parameters
app.get('/example/:id', (req, res) => {
  // Validate the request parameters
  const isValid = validator.validateRequestParams(req);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid request parameters' });
  }

  // Handle valid request
  // ...
});
``` 



