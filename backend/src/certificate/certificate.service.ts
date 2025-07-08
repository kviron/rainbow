import { Injectable } from "@nestjs/common";
import { CreateCertificateDto } from "./dto/create-certificate.dto";
import { UpdateCertificateDto } from "./dto/update-certificate.dto";
import { Repository } from "typeorm";
import { Certificate } from "./entities/certificate.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { PaginationResponseDto } from "../common/dto/pagination-response.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import * as fs from "fs";
import * as path from "path";
import { sendMailCertificate } from "../utils/sendEmail";
import { v4 as uuid } from "uuid";

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}
  async create(createCertificateDto: CreateCertificateDto) {
    const today = new Date();

    const newCertificate = await this.certificateRepository.save({
      ...createCertificateDto,
      code: uuid(),
      releaseDate: createCertificateDto.releaseDate ?? today,
    });

    const pdf = await this.createPdf(newCertificate);

    if (pdf && createCertificateDto.email) {
      const pdfBuffer = Buffer.from(pdf);
      sendMailCertificate(pdfBuffer, createCertificateDto.email);
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

  async createPdf(certificate: Certificate) {
    try {
      const today = new Date();
      const file = Buffer.from(
        fs.readFileSync(path.resolve(__dirname, "./certificate.template.pdf")),
      );
      const pdfDoc = await PDFDocument.load(file, { ignoreEncryption: true });
      const pages = pdfDoc.getPages();

      // Embed the Times Roman font
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

      // Get the width and height of the page
      const { width, height } = pages[1].getSize();

      const fontSize = 30;

      // Добавление текста услуги
      pages[1].drawText(certificate.service, {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      });

      // Добавление даты выдачи услуги
      pages[1].drawText(
        certificate.releaseDate?.toString() ?? today.toString(),
        {
          x: 200,
          y: height - 4 * fontSize,
          size: fontSize,
          font: timesRomanFont,
          color: rgb(0, 0, 0),
        },
      );

      // Добавление кол-во участников
      pages[1].drawText(certificate.countPersons.toString(), {
        x: 500,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      });

      // Serialize the PDFDocument to bytes (a Uint8Array)
      return await pdfDoc.save();
    } catch (e) {
      console.log(e);
    }
  }
}
