import React from "react";

const Blog = () => {
   return (
      <div className="mx-3 md:mx-10 my-16 flex flex-col gap-4">
         <div tabIndex={0} className="collapse collapse-arrow border-4 bg-base-100 rounded">
            <div className="collapse-title text-xl font-medium">What is the purpose of react router?</div>
            <div className="collapse-content font-semibold">
               <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
         </div>
      </div>
   );
};

export default Blog;
