import {HeroUIProvider} from "@heroui/react";
import type { ReactNode } from "react";
import {useNavigate, useHref} from "react-router";

type ThemeProviderHeroProps = {
  children: ReactNode
}

export const ThemeProviderHero = ({ children }: ThemeProviderHeroProps) => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  );
}