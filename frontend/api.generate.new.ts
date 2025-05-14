/* eslint-disable */
const OpenAPI = require('openapi-typescript-codegen');

OpenAPI.generate({
  input: 'http://host.docker.internal:3001/api-json',
  output: './src/shared/generated',
});
