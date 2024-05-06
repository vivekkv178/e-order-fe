import { FE_ROUTES, ROLES, Route } from "./constants";

export const routes: Route[] = [
  {
    icon: "lucide:home",
    path: FE_ROUTES.HOME,
    title: "Home",
    role: ROLES.USER,
  },
  {
    customClick: true,
    icon: "lucide:building",
    path: FE_ROUTES.MANAGE_ORGS,
    title: "Manage Organizations",
    role: ROLES.ADMIN,
  },
  {
    customClick: true,
    icon: "lucide:package",
    path: FE_ROUTES.MANAGE_PRODUCTS,
    title: "Manage Products",
    role: ROLES.ORG_USER,
  },
  {
    customClick: true,
    icon: "lucide:shopping-cart",
    path: FE_ROUTES.SHOPPING_CART,
    title: "Shopping Cart",
    role: ROLES.USER,
  },
  {
    customClick: true,
    icon: "lucide:shopping-bag",
    path: FE_ROUTES.MANAGE_ORDERS,
    title: "My Orders",
    role: ROLES.USER,
  },
];
