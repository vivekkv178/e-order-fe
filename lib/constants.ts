export const FE_ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  HOME: "/home",
  MANAGE_ORGS: "/organization",
};

export const BE_ROUTES = {
  GET_ORGS: "/v1/config/organization",
  GET_ORG: "/v1/config/organization/{uuid}",
  CREATE_ORG: "/v1/config/organization",
  UPDATE_ORG: "/v1/config/organization",
  DELETE_ORG: "/v1/config/organization/{uuid}",
};

export enum ROLES {
  ADMIN = "ADMIN",
  ORG_USER = "ORG_USER",
  USER = "USER",
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

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  OPTIONS = "OPTIONS",
  HEAD = "HEAD",
}
