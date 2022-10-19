import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Topics = () => {
   const navigate = useNavigate();
   const handleQuiz = (id)=>{
      navigate(`topic/quiz/${id}`)
   }
   const topics = useLoaderData().data;
   console.log(topics);
   return (
      <div className="mt-6 mx-3 sm:mx-12">
         <div className="card w-full bg-base-100 shadow-xl image-full h-80">
            <figure>
               <img className="w-full max-h-80" src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body flex items-center justify-center">
               <h2 className="card-title text-2xl md:text-3xl">You can tell James Duthie to shove that quiz. I have a few other words I can tell you about the quiz. ~John Tortorella</h2>
            </div>
         </div>

         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
            {
               topics.map((topic, idx) => {
                  const {name, total, logo, id} = topic;
                  return (
                     <div key={idx} className="card-compact w-full bg-base-100 shadow-2xl rounded-2xl">
                        <figure className="px-4 pt-10">
                           <img src={logo} alt="Shoes" className="rounded-xl w-full max-h-64 object-contain bg-slate-400" />
                        </figure>
                        <div className="card-body items-center text-center">
                           <div className="flex justify-between w-full text-lg flex-wrap font-semibold">
                              <h3>{name}</h3>
                              <h3>Total Quiz: {total}</h3>
                           </div>
                           <div className="card-actions w-full mt-3">
                              <button className="btn btn-primary w-full" onClick={()=>handleQuiz(id)}>
                                 Start Quiz<FontAwesomeIcon icon={faArrowRight} className="ml-3 text-lg"></FontAwesomeIcon>
                              </button>
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};

export default Topics;
