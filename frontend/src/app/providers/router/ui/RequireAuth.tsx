import { Navigate, useLocation } from 'react-router-dom';
import { type JSX, useMemo } from 'react';
import { UserRole, useUserStore } from '@/entities/User';
import { getRouteAuth, getRouteForbidden } from '@/shared/const/router';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const { authData  } = useUserStore();
  const location = useLocation();
  const userRoles = authData?.roles;

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      return userRoles?.includes(requiredRole);
    });
  }, [roles, userRoles]);

  if (!authData) {
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
