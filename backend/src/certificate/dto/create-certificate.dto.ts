import { IsNotEmpty, IsOptional } from 'class-validator';
import { ECertificateStatus } from '../entities/certificate.entity';
import { ApiProperty, ApiSchema } from '@nestjs/swagger';

@ApiSchema({ name: 'CreateCertificateRequest' })
export class CreateCertificateDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '2',
    description: 'Кол-во человек',
  })
  countPersons: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 'Прогулка на лошади',
    description: 'Услуга сертификата',
  })
  service: string;

  @IsOptional()
  @ApiProperty({
    example: '20.02.2020',
    description: 'Дата выпуска',
    type: Date,
    required: false,
  })
  releaseDate?: Date;

  @IsOptional()
  @ApiProperty({
    example: '20.02.2020',
    description: 'Дата выпуска',
    required: false,
  })
  email?: string;

  @IsOptional()
  @ApiProperty({
    example: '79203775754',
    description: 'Телефон заказчика',
    required: false,
  })
  phone?: string;

  @IsOptional()
  @ApiProperty({
    example: ECertificateStatus.Completed,
    description: 'Статус сертификата',
    enum: ECertificateStatus,
    required: false,
  })
  status?: ECertificateStatus;
}
