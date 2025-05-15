export enum AppRoutes {
    MAIN = 'main',
    CERTIFICATES = 'certificates',
    SETTINGS = 'settings',
    FORBIDDEN = 'forbidden',
    Auth = 'auth',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAuth = () => '/auth';
export const getRouteCertificates = () => '/certificates';
export const getRouteSettings = () => '/settings';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteAuth()]: AppRoutes.Auth,
    [getRouteCertificates()]: AppRoutes.CERTIFICATES,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
