import Hompage from './Hompage';
import './App.css';
import Login from './Login';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

const mustLogin = (element) => {
  if (localStorage.getItem('token')) {
    return element;
  }
  else {
    return <Navigate to="/login"></Navigate>
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: mustLogin(<Hompage/>),
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
