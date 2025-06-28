import {Navigate, useLocation} from 'react-router';
import { type JSX, useMemo } from 'react';
import { UserRole } from '@/entities/User';
import { getRouteAuth, getRouteForbidden } from '@/shared/const/router';
import { useAuthStore } from '@/entities/Auth';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const { user  } = useAuthStore();
  const location = useLocation();
  const userRoles = user?.roles;

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      return userRoles?.includes(requiredRole);
    });
  }, [roles, userRoles]);

  if (!user) {
    return (
      <Navigate to={getRouteAuth()} state={{ from: location }} replace />
    );
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate
        to={getRouteForbidden()}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
