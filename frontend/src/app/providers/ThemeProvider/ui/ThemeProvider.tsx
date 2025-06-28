import { type ReactNode } from 'react';
import { ConfigProvider, type ThemeConfig } from 'antd';
import { themeConfig } from '@/shared/config';

interface ThemeProviderProps {
  initialTheme?: ThemeConfig;
  children: ReactNode;
}


const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;

  const themeInit: ThemeConfig = {
    ...themeConfig,
    ...initialTheme,
  };

  return (
    <ConfigProvider theme={themeInit}>
        {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
