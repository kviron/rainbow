import { Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { Repository } from 'typeorm';
import { Certificate } from './entities/certificate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationResponseDto } from '../common/dto/pagination-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fs from "node:fs";
import { sendMailCertificate } from '../utils/sendEmail';

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}
  async create(createCertificateDto: CreateCertificateDto) {
    const today = new Date();

    const newCertificateData = {
      ...createCertificateDto,
      releaseDate: createCertificateDto.releaseDate ?? today,
    };

    const newCertificate = await this.certificateRepository.save(newCertificateData);

    const pdf = await this.createPdf(newCertificate)

    if (pdf && newCertificateData.email) {
      const pdfBuffer = Buffer.from(pdf)
      sendMailCertificate(pdfBuffer, newCertificateData.email)
    }

    return newCertificate;
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

  async createPdf(createCertificateDto: CreateCertificateDto) {
    try {
      const today = new Date();
      const file = fs.readFileSync('../files/sertificate.pdf', 'utf8')
      const pdfDoc = await PDFDocument.load(file)
      const pages = pdfDoc.getPages()

      // Embed the Times Roman font
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

      // Get the width and height of the page
      const { width, height } = pages[1].getSize()

      const fontSize = 30

      // Добавление текста услуги
      pages[1].drawText(createCertificateDto.service, {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      })

      // Добавление даты выдачи услуги
      pages[1].drawText(createCertificateDto?.releaseDate?.toString() ?? today.toString(), {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      })

      // Добавление кол-во участников
      pages[1].drawText(createCertificateDto.countPersons.toString(), {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      })

      // Serialize the PDFDocument to bytes (a Uint8Array)
      return await pdfDoc.save()
    } catch (e) {

    }
  }
}
