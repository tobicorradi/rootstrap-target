import './App.css';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App font-openSans">
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
