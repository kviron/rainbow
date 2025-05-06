import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntityBase } from '../../utils';
import { User } from '../../user/entities/user.entity';

export enum ECertificateStatus {
  NotPaid = 'notPaid',
  Active = 'active',
  Completed = 'completed',
  Rejected = 'rejected',
}

@Entity()
export class Certificate extends EntityBase {
  @PrimaryGeneratedColumn({ name: 'certificate_id' })
  id: number;

  @Column({ unique: true, generated: 'uuid' })
  code: string;

  @Column()
  countPersons: number;

  @Column({ nullable: true })
  email: string;

  @Column()
  releaseDate: Date;

  @Column({ nullable: true })
  service: string;

  @ManyToOne(() => User, (user) => user.certificates, {})
  @JoinColumn({ name: 'user_id' })
  userCreate: User;

  @Column({
    type: 'enum',
    enum: ECertificateStatus,
    default: ECertificateStatus.NotPaid,
  })
  status: ECertificateStatus;
}
