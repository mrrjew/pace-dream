import type { Route as NextRoute } from "next";
import { ComponentType } from "react";

// Get ready to update to nextjs version 13.2 with X typedRoutes
export type Route = NextRoute;
export type PathName = Route;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
