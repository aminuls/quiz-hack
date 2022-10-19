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
         <div tabIndex={0} className="collapse collapse-arrow border-4 bg-base-100 rounded">
            <div className="collapse-title text-xl font-medium">How does context api works?</div>
            <div className="collapse-content font-semibold">
               <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
         </div>
         <div tabIndex={0} className="collapse collapse-arrow border-4 bg-base-100 rounded">
            <div className="collapse-title text-xl font-medium">Tell us something about useRef?</div>
            <div className="collapse-content font-semibold">
               <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
               If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Blog;
