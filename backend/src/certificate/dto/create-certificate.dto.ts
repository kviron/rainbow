import { IsNotEmpty, IsOptional } from 'class-validator';
import { ECertificateStatus } from '../entities/certificate.entity';

export class CreateCertificateDto {
  @IsNotEmpty()
  countPersons: number;

  @IsNotEmpty()
  service: string;

  @IsOptional()
  releaseDate: Date;

  @IsOptional()
  email: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  status: ECertificateStatus;
}
