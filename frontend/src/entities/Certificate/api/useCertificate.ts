import { useMutation, useQuery } from '@tanstack/react-query';
import {
  type CertificateCreateData,
  certificateCreateMutation,
  type CertificateFindAllData,
  certificateFindAllOptions,
  certificateFindAllQueryKey, type CertificateUpdateData, certificateUpdateMutation,
} from '@/shared/generated';


export const useGetCertificates = (query?: CertificateFindAllData['query']) => {
  const { isPending, error, data } = useQuery({
    ...certificateFindAllQueryKey(),
    ...certificateFindAllOptions({
      query,
    }),
  });

  return {
    isPending,
    error,
    data,
  };
};

export const useUpdateCertificate = (query: CertificateUpdateData) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['certificate', 'update'],
    ...certificateUpdateMutation(query),
  });

  return {
    isPending,
    error,
    data,
  };
};

export const useCreateCertificate = (query: CertificateCreateData) => {
  return useMutation({
    ...certificateCreateMutation(query),
  });
};

export const useCreateCertificateMutation = () => {
  return useMutation({
    ...certificateCreateMutation()
  });
};