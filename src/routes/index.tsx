import { ReactElement } from 'react';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';

interface Route {
  path: string;
  component: ReactElement;
  private?: boolean;
  exact?: boolean;
}

const routes: Array<Route> = [
  {
    path: '/',
    component: <Home />,
    private: true,
    exact: true,
  },
  {
    path: '/login',
    component: <LogIn />,
  },
  {
    path: '/sign-up',
    component: <SignUp />,
  },
];

export default routes;
