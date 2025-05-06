import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EntityBase } from '../../utils';
import { Certificate } from '../../certificate/entities/certificate.entity';

@Entity()
export class User extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  login: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Certificate, (certificate) => certificate.userCreate, {
    onDelete: 'SET NULL',
  })
  certificates: Certificate[];
}
