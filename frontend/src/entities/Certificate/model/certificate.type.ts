import {
  type Certificate as CertificateGen,
  type CertificateUpdateResponses as CertificateUpdateResponsesGen,
  type UpdateCertificateRequest as UpdateCertificateRequestGen,
  type CreateCertificateRequest as CreateCertificateRequestGen,
} from '@/shared/generated';

export type Certificate = CertificateGen

export type CertificateUpdateResponses = CertificateUpdateResponsesGen;

export type UpdateCertificateRequest = UpdateCertificateRequestGen

export type CertificateDTO = {
  findOne: { id: string }
  remove: { id: string }
  update: { id: string, data: UpdateCertificateRequest }
  create: { data: CreateCertificateRequestGen }
}


export type CertificateDataTableType = Certificate