import { Button, Modal } from 'antd';
import cls from "./Navbar.module.scss"
import { CertificateCreateForm } from '@/features/CertificateCreateForm';
import { useState } from 'react';

export const Navbar = () => {
  const [createCertificateModal, setCreateCertificateModal] = useState(false);

  const openCreateCertificateModal = () => {
    setCreateCertificateModal(true)
  }

  const closeCreateCertificateModal = () => {
    setCreateCertificateModal(false)
  }

  return (
    <div className={cls.wrapper}>
      <div></div>
      <div><Button variant={'filled'} onClick={openCreateCertificateModal}>Создать сертификат</Button></div>

      <Modal
        title="Создать сертификат"
        open={createCertificateModal}
        onClose={closeCreateCertificateModal}
        onCancel={closeCreateCertificateModal}
        footer={null}
      >
        <CertificateCreateForm/>
      </Modal>
    </div>
  );
};