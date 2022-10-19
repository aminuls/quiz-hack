import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

function Statistics() {
   const data = useLoaderData().data;
   return (
      <div className="h-96 lg:w-2/5 mx-auto my-auto">
         <ResponsiveContainer width="100%" height="100%" className="flex pt-20">
            <BarChart width={450} height={400} data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" />
               <YAxis tickCount={7} />
               <Tooltip />
               <Legend />
               <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
}
export default Statistics;
