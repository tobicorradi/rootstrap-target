import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import { PrivateRoute } from './routes/PrivateRoute';

function App() {
  return (
    <div className="App font-openSans">
      <Routes>
        {routes.map((route) => (
          route.private ? (
            <Route
              key={route.path}
              path={route.path}
              element={(
                <PrivateRoute>
                  {route.component}
                </PrivateRoute>
            )}
            />
          ) : (
            <Route key={route.path} path={route.path} element={route.component} />
          )
        ))}
      </Routes>
    </div>
  );
}

export default App;
