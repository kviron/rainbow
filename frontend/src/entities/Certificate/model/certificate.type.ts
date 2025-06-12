import { BaseService } from "@/shared/classes";
import { certificateFindAll, certificateFindOne, certificateUpdate } from '@/shared/generated';

class CertificateServiceClass implements BaseService {
  findAll = () => {
    return certificateFindAll()
  }

  findOne = (id: string) => {
    return certificateFindOne({
      path: {id}
    })
  }

  update = (id: string) => {
    return certificateUpdate({
      path: {id},
      body: {
      }
    })
  }
}

export const CertificateService = new CertificateServiceClass();