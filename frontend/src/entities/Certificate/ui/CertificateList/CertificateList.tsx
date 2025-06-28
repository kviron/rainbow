import { Table, type TableProps } from 'antd';
import type { CertificateDataTableType } from '../../model/certificate.type.ts';
import { certificatesColumns } from '@/entities/Certificate/model/certificate.utils.ts';


type CertificateListProps = Omit<TableProps, 'dataSource' | 'onChange'> & {
  certificates?: CertificateDataTableType[];
  onChange?: TableProps<CertificateDataTableType>['onChange']
}

export const CertificateList = (props: CertificateListProps) => {
  const { certificates, loading, onChange } = props;

  return (
    <Table<CertificateDataTableType>
      loading={loading}
      columns={certificatesColumns}
      dataSource={certificates}
      onChange={onChange}
    />
  );
};