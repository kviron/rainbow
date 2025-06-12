import { ApiProperty } from '@nestjs/swagger';

export class PaginationQuery {
  @ApiProperty({
    minimum: 0,
    maximum: 10000,
    title: 'Page',
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    format: 'int32',
    default: 0,
    example: 123,
  })
  page: number;

  @ApiProperty({
    name: '_sortBy',
    nullable: true,
    example: ['sort1', 'sort2'],
  })
  sortBy: string[];

  @ApiProperty()
  limit: number;

  @ApiProperty({
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'number',
      },
    },
    additionalProperties: true,
  })
  filter: Record<string, any>;

  static _OPENAPI_METADATA_FACTORY() {
    return {
      page: { required: false },
      limit: { required: false },
      sortBy: { type: () => [String], required: false },
    };
  }
}
