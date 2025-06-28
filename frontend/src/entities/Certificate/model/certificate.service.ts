import {
  certificateCreate,
  type CertificateFindAllData,
  certificateFindAllOptions, certificateFindAllQueryKey,
  certificateFindOne,
  certificateRemove,
  certificateUpdate,
} from '@/shared/generated';
import type { CertificateDTO } from '@/entities/Certificate/model/certificate.type.ts';
import { queryClient } from '@/shared/api';

class CertificateServiceClass {
  create = async (params: CertificateDTO['create']) => {
    return certificateCreate({
      body: params.data
    });
  }

  findAll = async (query: CertificateFindAllData['query']) => {
    return await queryClient.fetchQuery({
      ...certificateFindAllQueryKey(),
      ...certificateFindAllOptions({
        query
      }),
    })
  }

  findOne = async (params: CertificateDTO['findOne']) => {
    return await certificateFindOne({
      path: {
        id: params.id
      }
    })
  }

  update = async (params: CertificateDTO['update']) => {
    return await certificateUpdate({
      path: {
        id: params.id
      },
      body: params.data
    })
  }

  remove = (params: CertificateDTO['remove']) => {
    return certificateRemove({
      path: {
        id: params.id
      }
    })
  }
}

export const CertificateService = new CertificateServiceClass();