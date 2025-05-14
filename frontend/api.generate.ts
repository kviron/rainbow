/* eslint-disable */
import * as path from 'node:path';
import { generateApi } from 'swagger-typescript-api';

export const schemas = [];

generateApi({
  url: 'http://host.docker.internal:3001/api-json',
  output: path.resolve(process.cwd(), './src/shared/generated'),
  // @ts-ignore Путь к шаблонам для генерации кода
  // templates: path.resolve(process.cwd(), './src/shared/templates'),
  // Дополнительные шаблоны для генерации
  extraTemplates: [{ path: path.resolve(process.cwd(), './src/shared/templates/re-export.ejs'), name: 'index' }],
  hooks: {
    onCreateRoute: (routeData) => {
      // Альтернативный способ: модифицируем имя роута
      const endpointName = routeData.routeName.original.replace(/.*Controller/g, '');
      routeData.routeName.original = endpointName.charAt(0).toLowerCase() + endpointName.slice(1)

      return routeData;
    }
  },
  // @ts-ignore
  modular: true,
  // Использовать первый тег как имя модуля
  moduleNameFirstTag: true,
  // Использовать axios как HTTP-клиент
  httpClientType: 'axios',
  // Использовать единый HTTP-клиент для всех запросов
  singleHttpClient: true,
  // Извлекать параметры запроса в отдельные типы
  extractRequestParams: true,
  generateClient: true,
  extractEnums: true,
});