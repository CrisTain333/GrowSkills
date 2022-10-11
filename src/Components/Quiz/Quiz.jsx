import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQus from "../QuizOptions/QuizQus";
import "./quiz.css";
import Footer from "../footer/Footer";

const Quiz = () => {
  const datas = useLoaderData();
  console.log(datas)
  const data = datas.data.questions;
  console.log(data.length)
  const quizName = datas.data.name;
  let id = 0;

  return (
    <>
      <div className="mainQuizDiv">
        <h3 className="text-center mt-5">Quiz Of {quizName}</h3>
        {data.map((e) => {
          return <QuizQus key={id=id+1} data={e} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
