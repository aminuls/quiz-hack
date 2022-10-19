import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Topic = () => {
   const quizzes = useLoaderData().data;
   const { name, questions } = quizzes;
   // console.log(quizzes);

   const statusHandler = (option, correctAnswer, id) => {
      const quizOption = document.getElementById(id);
      if (option === correctAnswer) {
         const notify = () => toast.success("Wow ! Your Answer is Correct");
         quizOption.classList.add("bg-green-400");
         notify();
      } else {
         const notify = () => toast.error("Oops ! You Answer is Wrong");
         quizOption.classList.add("bg-red-400");
         notify();
      }
   };

   const visibilityHandler = (answer) => {
      const notify = () => toast.success(`The Correct answer is: ${answer}`);
      notify();
   };

   return (
      <div className="mt-4">
         <ToastContainer position="top-center" />
         <h2 className="text-2xl font-semibold">Quiz of {name}</h2>
         <div className="flex flex-wrap flex-col items-center gap-5 mt-8">
            {questions.map((quiz, index) => {
               const { question, correctAnswer, id, options } = quiz;
               // console.log(correctAnswer);
               return (
                  <div key={index} className="card mx-3 md:mx-0 sm:w-full md:w-4/5 lg:w-3/5 shadow-2xl">
                     <div className="card-body p-2 py-4 sm:p-8 flex items-center">
                        <div className="flex items-center justify-between w-full">
                           <h2 className="card-title">{`Quiz ${index + 1}: ${question}`}</h2>
                           <button onClick={() => visibilityHandler(correctAnswer)}>
                              <FontAwesomeIcon className="mx-4 cursor-pointer text-lg mt-1" icon={faEye}></FontAwesomeIcon>
                           </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full justify-center mt-5">
                           {options.map((option, idx) => {
                              const generateId = `id${idx}${index}${id}`;
                              console.log(generateId);
                              return (
                                 <div key={idx} id={generateId} className="border-2 border-sky-700 rounded-md h-20 flex items-center cursor-pointer" onClick={() => statusHandler(option, correctAnswer, generateId)}>
                                    <p className="font-semibold px-2 text-lg">{option}</p>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Topic;
