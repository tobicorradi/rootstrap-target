import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';
import { RouteType } from '../types/routesTypes';

const routes: Array<RouteType> = [
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
