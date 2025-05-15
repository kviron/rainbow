import { CreateCertificateDto } from './create-certificate.dto';
import { ApiSchema, PartialType } from '@nestjs/swagger';

@ApiSchema({ name: 'UpdateCertificateRequest' })
export class UpdateCertificateDto extends PartialType(CreateCertificateDto) {}
