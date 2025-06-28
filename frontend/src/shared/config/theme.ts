import { theme, type ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
  cssVar: true,
  algorithm: [theme.darkAlgorithm],
  components: {
    Layout: {
      bodyBg: '#2c2c2c',
      headerBg: '#1c1c1c',
      siderBg: '#1c1c1c',
    },
    Menu: {
      colorBgContainer: 'transparent',
      activeBarBorderWidth: 0,
      collapsedWidth: '50px'
    }
  },
  token: {
    colorPrimary: '#E88700',
  }
};