import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
import { RouteType } from '../types/routesTypes';
import { RouterPaths } from '../constants';

const routes: Array<RouteType> = [
  {
    path: RouterPaths.HOME,
    component: <Home />,
    private: true,
    exact: true,
  },
  {
    path: RouterPaths.WELCOME,
    component: <Welcome />,
    private: true,
    exact: true,
  },
  {
    path: RouterPaths.LOG_IN,
    component: <LogIn />,
  },
  {
    path: RouterPaths.SIGN_UP,
    component: <SignUp />,
  },
];

export default routes;
