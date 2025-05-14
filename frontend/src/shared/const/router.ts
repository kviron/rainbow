export enum AppRoutes {
    MAIN = 'main',
    CERTIFICATES = 'certificates',
    SETTINGS = 'settings',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteCertificates = () => '/certificates';
export const getRouteSettings = () => '/settings';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteCertificates()]: AppRoutes.CERTIFICATES,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
