import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EntityBase } from "../../utils";
import { User } from "../../user/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { CertificateStatusEnum } from "../enums";

@Entity()
export class Certificate extends EntityBase {
  @PrimaryGeneratedColumn({ name: "certificate_id" })
  @ApiProperty({ example: 1, description: "Id certificate" })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ example: "scascascas2", description: "Code certificate" })
  code: string;

  @Column()
  @ApiProperty({ example: "2", description: "Кол-во человек" })
  countPersons: number;

  @Column({ nullable: true })
  @ApiProperty({
    example: "test@test.ru",
    nullable: true,
    description: "Почта на которую отправить сертификат",
  })
  email: string;

  @Column()
  @ApiProperty({
    example: "20.02.2020",
    description: "Дата выпуска сертификата",
  })
  releaseDate: Date;

  @Column()
  @ApiProperty({
    example: "Прогулка на лошадях",
    description: "Текст услуги",
  })
  service: string;

  @Column({
    type: "enum",
    enum: CertificateStatusEnum,
    default: CertificateStatusEnum.NotPaid,
  })
  @ApiProperty({
    example: CertificateStatusEnum.Completed,
    description: "Статус сертификата",
    enum: CertificateStatusEnum,
    enumName: "CertificateStatusEnum",
    type: CertificateStatusEnum,
  })
  status: CertificateStatusEnum;
}
