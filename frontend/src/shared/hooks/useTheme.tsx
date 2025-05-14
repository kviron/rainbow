import { theme as antdTheme } from 'antd';
import { themeConfig } from '@/shared/config';

const { getDesignToken  } = antdTheme;



export const useTheme = () => {
  const themeToken = getDesignToken(themeConfig);

  return {
    themeToken
  }
}