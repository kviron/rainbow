import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class EntityBase {
  @CreateDateColumn()
  @ApiProperty({ description: 'Create Date' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Update Date' })
  updatedAt: Date;
}
