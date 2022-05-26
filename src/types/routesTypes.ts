import { ReactElement } from 'react';

export interface RouteType {
    path: string;
    component: ReactElement;
    private?: boolean;
    exact?: boolean;
  }
