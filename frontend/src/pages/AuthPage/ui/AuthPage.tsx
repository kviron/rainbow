import { Page } from '@/widgets/Page';
import { useMainLayout } from '@/app/providers/MainLayouProvider';
import { useEffect } from 'react';
import { AuthService, LoginForm } from '@/entities/Auth';
import { clsx } from 'clsx';
import styles from './AuthPage.module.scss';
import { UserService, useUserStore } from '@/entities/User';
import type { AuthServiceDto } from '@/entities/Auth/';
import { useNavigate } from 'react-router-dom';
import { getRouteMain } from '@/shared/const';

const AuthPage = () => {
  const { setClear, reset } = useMainLayout();
  const navigate = useNavigate();

  const { setAuthData } = useUserStore();

  useEffect(() => {
    setClear()

    return () => {
      reset()
    };
  }, [setClear, reset]);

  const onLogin = (data: AuthServiceDto['login']) => {
    AuthService.login(data).then(res => {
      if (res) {
        UserService.findOne(res).then(response => {
          if (response) {
            setAuthData(response);
            navigate(getRouteMain());
          }
        });
      }
    });
  };

  return <Page data-testid="AuthPage" className={clsx(styles.center)}>
    <LoginForm onSuccess={onLogin} />
  </Page>;
};

export default AuthPage;