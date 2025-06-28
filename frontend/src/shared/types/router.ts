import type { UserRole } from '@/entities/User';
import type { RouteProps } from 'react-router';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
