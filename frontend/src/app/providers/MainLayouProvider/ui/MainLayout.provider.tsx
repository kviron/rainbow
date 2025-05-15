import { defaultLayout, type LayoutConfig, LayoutContext } from '../model/MainLayout.context.tsx';
import { useCallback, useState } from 'react';

export const MainLayoutProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [config, setConfig] = useState({
    showHeader: true,
    showSidebar: true,
    showFooter: true,
    contentCenter: false,
  });

  const setLayout = useCallback((newConfig: Partial<Omit<LayoutConfig, 'setLayout'>>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, [])

  const reset = useCallback(() => {
    setLayout(defaultLayout)
  }, [setLayout])

  const setClear = useCallback(() => {
    setLayout({
      showHeader: false,
      showSidebar: false,
      showFooter: false,
      contentCenter: true,
    })
  }, [setLayout])

  return (
    <LayoutContext.Provider value={{ ...config, setLayout, reset, setClear }}>
      {children}
    </LayoutContext.Provider>
  );
};