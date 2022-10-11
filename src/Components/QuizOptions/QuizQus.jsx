import React, { useState } from "react";
import "./qu.css";
import toast, { Toaster } from "react-hot-toast";

const QuizQus = (props) => {
  const [ans, setAns] = useState("");
  const { question, options } = props.data;
  // console.log(props.data)


  
  const notify = () => {
    toast.success("Correct Answer");
  };
  const wrong = () => {
    toast.error("Wrong Answer");
  };

  const showAnswer = (id,data) => {
  
      const ans = data.correctAnswer
      const tost = ()=>{
        toast.success(`Correct Answer Is : ${ans} `   );
      }
      tost()
   

  };

  const handleanswer = (e) => {
    setAns(e.target.value);
    if (props.data.correctAnswer === e.target.value) {
      notify();
    } else {
      wrong();
    }
  };

  return (
    <div className="quiDivs">
      <div className="mainDiv">
      <i className="fa-solid fa-eye" onClick={()=>{showAnswer(props.data.id,props.data)}}></i>
        <Toaster position="top-center" reverseOrder={false} />
  
        <p className="text-center "> {question} </p>
        <div className="quizOptionDiv">
          {options.map((e) => {
            return (
              <>
                <div className="qus">
                  <input
                    type="radio"
                    id={e}
                    name="quizes"
                    value={e}
                    onChange={handleanswer}
                  />
                  <label htmlFor={e} className="ms-3">
                    {e}
                  </label>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizQus;
