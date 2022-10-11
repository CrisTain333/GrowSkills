import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQus from "../QuizOptions/QuizQus";
import "./quiz.css";
import Footer from "../footer/Footer";

const Quiz = () => {
  const datas = useLoaderData();
  const data = datas.data.questions;
  const quizName = datas.data.name;
  const id = datas.data.id;

  return (
    <>
      <div className="mainQuizDiv">
        <h3 className="text-center mt-5">Quiz Of {quizName}</h3>
        {data.map((e) => {
          console.log(e);
          return <QuizQus key={id} data={e} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
