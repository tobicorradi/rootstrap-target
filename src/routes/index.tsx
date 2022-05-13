import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';
import { RouteType } from '../types/routesTypes';
import { RoutherPaths } from '../constants/routerPaths';

const routes: Array<RouteType> = [
  {
    path: RoutherPaths.HOME,
    component: <Home />,
    private: true,
    exact: true,
  },
  {
    path: RoutherPaths.LOG_IN,
    component: <LogIn />,
  },
  {
    path: RoutherPaths.SIGN_UP,
    component: <SignUp />,
  },
];

export default routes;
