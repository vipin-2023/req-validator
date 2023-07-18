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

``` 

```js
// body
app.post('/example', (req, res) => {

  const validator = new Validator(['username', 'email', 'password']);
  const isValid = validator.validateRequestBody(req);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

});
``` 

```js

// params
app.get('/example/:id/:name', (req, res) => {

  const validator = new Validator(['id','name']);
  const isValid = validator.validateRequestParams(req);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid request parameters' });
  }

 });
``` 



