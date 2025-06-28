import { CertificateList, useGetCertificates } from '@/entities/Certificate';
import { Page } from '@/widgets/Page';

const CertificatePage = () => {
  const { data, isPending } = useGetCertificates()

  return (
    <Page data-testid="CertificatePage">
      <CertificateList certificates={data?.results} loading={isPending} />
    </Page>
  )
}

export default CertificatePage;