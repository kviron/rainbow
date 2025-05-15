import { createContext, useContext } from 'react';

export type LayoutConfig = {
  showHeader: boolean;
  showSidebar: boolean;
  showFooter: boolean;
  contentCenter: boolean,
};

export type LayoutConfigActions = {
  setLayout: (config: Partial<Omit<LayoutConfig, 'setLayout' | 'defaultLayout'>>) => void;
  reset: () => void
  setClear: () => void
}

export const defaultLayout: LayoutConfig = {
  showHeader: true,
  showSidebar: true,
  showFooter: true,
  contentCenter: false,
};

export const LayoutContext = createContext<LayoutConfig & LayoutConfigActions>({
  ...defaultLayout,
  setLayout: () => {},
  reset: () => {},
  setClear: () => {},
});

export const useMainLayout = () => useContext(LayoutContext);