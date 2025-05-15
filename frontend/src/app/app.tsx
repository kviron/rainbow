import React, { Suspense, useEffect } from 'react';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppRouter } from '@/app/providers/router';
import { useUserStore } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';

const App: React.FC = () => {
  const { _inited, initAuthData } = useUserStore();

  useEffect(() => {
    if (!_inited) {
      initAuthData()
    }
  }, [_inited, initAuthData]);

  if (!_inited) {
    return <PageLoader/>
  }


  return (
    <Suspense fallback="">
      <MainLayout
        header={<></>}
        sidebar={<></>}
        content={<AppRouter />}
      />
    </Suspense>
  );
};

export default App;