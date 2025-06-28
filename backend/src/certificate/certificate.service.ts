import { Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { Repository } from 'typeorm';
import { Certificate } from './entities/certificate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationResponseDto } from '../common/dto/pagination-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}
  async create(createCertificateDto: CreateCertificateDto) {
    const today = new Date();

    const newCertificate = {
      ...createCertificateDto,
      releaseDate: createCertificateDto.releaseDate ?? today,
    };

    return await this.certificateRepository.save(newCertificate);
  }

  async findAll(
    params: PaginationQueryDto,
  ): Promise<PaginationResponseDto<Certificate>> {
    const [data, total] = await this.certificateRepository.findAndCount();

    return {
      limit: 2,
      results: data,
      total,
      offset: 0,
    };
  }

  async findOne(id: number) {
    return await this.certificateRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateCertificateDto: UpdateCertificateDto) {
    return `This action updates a #${id} certificate`;
  }

  remove(id: number) {
    return `This action removes a #${id} certificate`;
  }
}
