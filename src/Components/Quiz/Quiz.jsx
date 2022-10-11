import React from 'react'
import { useLoaderData } from 'react-router-dom'
import QuizQus from '../QuizOptions/QuizQus'
import './quiz.css'
const Quiz = () => {
    const datas = useLoaderData()
    const data  = datas.data.questions
    const quizName = datas.data.name
    console.log(quizName)
    // console.log(data);
  return (
    <div className='mainQuizDiv'>

    <h3 className='text-center mt-5'>Quiz Of  {quizName}</h3>
        {
            data.map(e=>{
                return(
                    <QuizQus key={e.id}  data={e}/>
                )
            })
        }
    </div>
  )
}

export default Quiz