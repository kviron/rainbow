import type { ReactNode } from "react";
import { ApiProvider } from "./ApiProvider";
import { MainLayoutProvider } from "./MainLayouProvider";
import { ThemeProvider } from "./ThemeProvider";

type AppProviderProps = {
  children: ReactNode;
}

export const AppProvider = ({ children } : AppProviderProps) => {

  return (
    <ThemeProvider>
      <ApiProvider>
        <MainLayoutProvider>
          {children}
        </MainLayoutProvider>
      </ApiProvider>
    </ThemeProvider>
  );
};