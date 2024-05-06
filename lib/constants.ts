export const FE_ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  HOME: "/home",
  MANAGE_ORGS: "/organization",
  MANAGE_PRODUCTS: "/product",
  SHOPPING_CART: "/cart",
  MANAGE_ORDERS: "/orders",
  MANAGE_ORG_ORDERS: "/org-orders",
};

export const BE_ROUTES = {
  GET_ORGS: "/v1/config/organization",
  GET_ORG: "/v1/config/organization/{uuid}",
  CREATE_ORG: "/v1/config/organization",
  UPDATE_ORG: "/v1/config/organization",
  DELETE_ORG: "/v1/config/organization/{uuid}",
  GET_PRODUCTS: "/v1/ecomm/product",
  GET_ORG_PRODUCTS: "/v1/ecomm/product/org",
  GET_PRODUCT: "/v1/ecomm/product/{uuid}",
  CREATE_PRODUCT: "/v1/ecomm/product",
  UPDATE_PRODUCT: "/v1/ecomm/product",
  DELETE_PRODUCT: "/v1/ecomm/product/{uuid}",
  CREATE_ORDER: "/v1/ecomm/order",
  GET_ORDERS: "/v1/ecomm/order",
  GET_ORG_ORDERS: "/v1/ecomm/order/org-orders",
};

export enum ROLES {
  ADMIN = "ADMIN",
  ORG_USER = "ORG_USER",
  USER = "USER",
}

export const RBAC = {
  [ROLES.USER]: [ROLES.USER, ROLES.ORG_USER, ROLES.ADMIN],
  [ROLES.ORG_USER]: [ROLES.ORG_USER, ROLES.ADMIN],
  [ROLES.ADMIN]: [ROLES.ADMIN],
};

export type Route = {
  icon: string;
  path: string;
  title: string;
  role: ROLES;
  customClick?: boolean;
  badge?: number;
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
