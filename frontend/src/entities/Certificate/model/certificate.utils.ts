import type { TableColumnsType } from 'antd';
import type { CertificateDataTableType } from './certificate.type.ts';

export const certificatesColumns: TableColumnsType<CertificateDataTableType> = [
  {
    title: 'Дата создания',
    dataIndex: 'createdAt',
  },
  {
    title: 'Услуга',
    dataIndex: 'service',
  },
  {
    title: 'Код сертификата',
    dataIndex: 'code',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Дата выпуска',
    dataIndex: 'releaseDate',
  },
];