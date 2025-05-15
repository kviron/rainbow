import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntityBase } from '../../utils';
import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum CertificateStatusEnum {
  NotPaid = 'notPaid',
  Active = 'active',
  Completed = 'completed',
  Rejected = 'rejected',
}

@Entity()
export class Certificate extends EntityBase {
  @PrimaryGeneratedColumn({ name: 'certificate_id' })
  @ApiProperty({ example: 1, description: 'Id certificate' })
  id: number;

  @Column({ unique: true, generated: 'uuid', length: 8 })
  @ApiProperty({ example: 'scascascas2', description: 'Code certificate' })
  code: string;

  @Column()
  @ApiProperty({ example: '2', description: 'Кол-во человек' })
  countPersons: number;

  @Column({ nullable: true })
  @ApiProperty({
    example: 'test@test.ru',
    nullable: true,
    description: 'Почта на которую отправить сертификат',
  })
  email: string;

  @Column()
  @ApiProperty({
    example: '20.02.2020',
    description: 'Дата выпуска сертификата',
  })
  releaseDate: Date;

  @Column()
  @ApiProperty({
    example: 'Прогулка на лошадях',
    description: 'Текст услуги',
  })
  service: string;

  @ManyToOne(() => User, (user) => user.certificates, {})
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({
    example: '23',
    description: 'Id пользователя выдавшего сертифика',
    type: () => User,
  })
  userCreate: User;

  @Column({
    type: 'enum',
    enum: CertificateStatusEnum,
    default: CertificateStatusEnum.NotPaid,
  })
  @ApiProperty({
    example: CertificateStatusEnum.Completed,
    description: 'Статус сертификата',
    enum: CertificateStatusEnum,
    enumName: 'CertificateStatusEnum',
    type: CertificateStatusEnum,
  })
  status: CertificateStatusEnum;
}
