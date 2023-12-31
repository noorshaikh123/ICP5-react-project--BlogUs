import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './view/home/home';
import ContactUs from './view/ContactUs/ContactUs';
import About from "./view/about/about";
import BlogWriting from "./view/blogwriting/blogwriting";
import Popular from './view/Popular/popular';
import SignUp from './view/login-signup/signup';
import Login from './view/login-signup/login';
import ContentHome from './view/ContentHome/ContentHome';
import Tea from './view/popularcontents/tea';
import Coding from './view/popularcontents/coding';
import Ai from './view/popularcontents/ai';
// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contacts',
    element: <ContactUs/>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: "/popular",
    element: <Popular/>,
  },
  {
    path: '/ContentHome',
    element: <ContentHome />
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/tea',
    element: <Tea/>
  },
  {
    path: '/coding',
    element: <Coding/>
  },
  {
    path:'/blog',
    element: <ContentHome/>
  },
  {
    path:'/ai',
    element: <Ai/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={router} />
  </>
);


