import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { CertificateStatusEnum } from '../enums';

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
    example: CertificateStatusEnum.Completed,
    description: 'Статус сертификата',
    enum: CertificateStatusEnum,
    enumName: 'CertificateStatusEnum',
    required: false,
  })
  status?: CertificateStatusEnum;
}
