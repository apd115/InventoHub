import { Body } from "./src/components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Ask from "./Ask";
import { Error } from "./src/components/Error.jsx";
import { Header } from "./src/components/Header.jsx";
import Pricing from "./src/components/Pricing.jsx";
import Experts from "./src/components/Experts.jsx";
import SignIn from "./src/components/SignIn.jsx";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { About } from "./src/components/About.jsx";
import Home from "./src/components/Home.jsx";
import { Community } from "./src/components/Community.jsx";

import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';








// function App() {
  
//   return (
//      <Body/>
//   );
// }
const AppLayout = () => {
  return(
    <div>
      
      <Header/>
      <Body/>
      <Outlet/>
    </div>
  );
};

 const appRouter = createBrowserRouter([
    {
      path : "/",
      element: <AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        
        {
          path:"/pricing",
          element:<Pricing/>,
        },
        {
          path:"/experts",
          element:<Experts/>,
        },
        // {
        //   path:"/ask",
        //   element:<Ask/>,
        // },
        {
          path:"/signin",
          element:<SignIn/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/community",
          element:<Community/>,
        },
       
        
      ],
      errorElement:<Error/>,
    },
  
    
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </StrictMode>,
)
