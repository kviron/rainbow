import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://host.docker.internal:3001/api-json',
  output: {
    path: './src/shared/generated',
    case: 'camelCase',
    indexFile: true
  },
  plugins: [
    {
      name: '@hey-api/client-axios',
    },
    '@hey-api/schemas',
    {
      name: '@hey-api/sdk',
      auth: true,
      client: true,
    },
    {
      name: "@hey-api/typescript",
      enums: "typescript",
      exportInlineEnums: true,
      enumsCase: 'PascalCase',
      exportFromIndex: true,
    },
    {
      name: '@tanstack/react-query',
      exportFromIndex: true,
    },
  ],
});