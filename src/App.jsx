  
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Layout/app-layout';
import Home from './pages/home';
import GifPage from './pages/single-gif';
import Category from './pages/category';
import SearchPage from './pages/search';
import Favorites from './pages/favorites';
import GifProvider from './context/gif-context';
;

//home 
// categories ssearch singlegif  favories\\

const router = createBrowserRouter([
  {
    element:<AppLayout/>,

    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/:type/:slug",
        element:<GifPage/>
      },
      {
        path:"/:category",
        element:<Category/>
      },
      {
        path:"/search/:query",
        element:<SearchPage/>
      },
      {
        path:"/favorites",
        element:<Favorites/>
      },
    ]

  }
])

const App = () => {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
};

export default App
