# loki-validator

[![npm version](https://badge.fury.io/js/loki-validator.svg)](https://badge.fury.io/js/loki-validator)

A simple request validator utility for validating request body , query and parameters.

## Installation

You can install the package using npm:

```bash
npm install loki-validator
``` 

## Usage
```js
const validator  = require('loki-validator');

``` 

```js
// body
app.post('/example', (req, res) => {

  const validatorObj = new validator(['username', 'email', 'password']);
  const isValid = validatorObj.validateRequestBody(req);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

});
``` 

```js

// params
app.get('/example/:id/:name', (req, res) => {

  const validatorObj = new validator(['id','name']);
  const isValid = validatorObj.validateRequestParams(req);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid request parameters' });
  }

 });
``` 

```js

// query
app.get('/example/', (req, res) => {

  const validatorObj = new validator(['search','limit','page']);
  const isValid = validatorObj.validateRequestQuery(req);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid Query parameters' });
  }

 });
``` 


