import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../Blog/Blog";
import NotFound from "../NotFound/NotFound";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path:'/',
            loader: async()=>{
               return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element: <Topics></Topics>
         },
         {
            path: '/statistics',
            element: <Statistics></Statistics>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         }
      ]
   },
   {
      path:'*',
      element: <NotFound></NotFound>
   }
]);