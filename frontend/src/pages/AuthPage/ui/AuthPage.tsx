import { Page } from '@/widgets/Page';
import { useMainLayout } from '@/app/providers/MainLayouProvider';
import { useEffect } from 'react';
import { LoginForm, useAuthStore } from '@/entities/Auth';
import { clsx } from 'clsx';
import styles from './AuthPage.module.scss';
import type { AuthServiceDto } from '@/entities/Auth/';

const AuthPage = () => {
  const { setClear, reset } = useMainLayout();

  const { login } = useAuthStore();

  useEffect(() => {
    setClear()

    return () => {
      reset()
    };
  }, [setClear, reset]);

  const onLogin = async (data: AuthServiceDto['login']) => {
    login(data)
  };

  return <Page data-testid="AuthPage" className={clsx(styles.center)}>
    <LoginForm onSuccess={onLogin} />
  </Page>;
};

export default AuthPage;