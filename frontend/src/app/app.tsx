import { type FC, useEffect, Suspense } from 'react';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppRouter } from '@/app/providers/router';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar.tsx';
import { useAuthStore } from '@/entities/Auth';
import { PageLoader } from '@/widgets/PageLoader';
import { Navbar } from '@/widgets/Navbar';

const App: FC = () => {
  const { inited, initAuth } = useAuthStore();

  useEffect(() => {
    if (!inited) {
      initAuth();
    }
  }, [inited, initAuth]);

  if (!inited) {
    return (<PageLoader />);
  }

  return (
    <Suspense fallback="">
      <MainLayout
        header={<Navbar/>}
        sidebar={<Sidebar />}
        content={<AppRouter />}
      />
    </Suspense>
  );
};

export default App;