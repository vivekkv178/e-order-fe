export const FE_ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  HOME: '/home',
  MANAGE_ORGS: '/organization',
};

export enum ROLES {
  ADMIN = 'ADMIN',
  ORG_USER = 'ORG_USER',
  USER = 'USER',
}

export const RBAC = {
  [ROLES.USER]: [ROLES.USER, ROLES.ADMIN],
  [ROLES.ORG_USER]: [ROLES.ORG_USER, ROLES.ADMIN],
  [ROLES.ADMIN]: [ROLES.ADMIN],
};

export type Route = {
  icon: string;
  path: string;
  title: string;
  role: ROLES;
  customClick?: boolean; // Optionally include customClick property
};
