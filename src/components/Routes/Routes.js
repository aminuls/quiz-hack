import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../Blog/Blog";
import NotFound from "../NotFound/NotFound";
import Statistics from "../Statistics/Statistics";
import Topic from "../Topic/Topic";
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
            loader: async()=>{
               return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element: <Statistics></Statistics>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: 'topic/quiz/:quizId',
            loader: async({params})=>{
               return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
            },
            element: <Topic></Topic>
         }
      ]
   },
   {
      path:'*',
      element: <NotFound></NotFound>
   }
]);