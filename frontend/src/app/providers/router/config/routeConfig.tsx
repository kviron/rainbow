import { MainPage } from '@/pages/MainPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
  AppRoutes,
  getRouteForbidden,
  getRouteCertificates,
  getRouteMain,
  getRouteSettings, getRouteAuth,
} from '@/shared/const/router';
import { type AppRoutesProps } from '@/shared/types/router';
import { AuthPage } from '@/pages/AuthPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Auth]: {
    path: getRouteAuth(),
    element: <AuthPage />,
  },
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
    authOnly: true,
    roles: [UserRole.Admin],
  },
  [AppRoutes.SETTINGS]: {
    path: getRouteSettings(),
    element: <></>,
    authOnly: true,
    roles: [UserRole.Admin],
  },
  [AppRoutes.CERTIFICATES]: {
    path: getRouteCertificates(),
    element: <></>,
    authOnly: true,
    roles: [UserRole.Admin],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
