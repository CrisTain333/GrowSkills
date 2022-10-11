import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from '../footer/Footer' 

const Rechart = () => {
  const [data,setData]=useState([])



  useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/quiz')
    .then (data =>{
      const quizLoaded = data.data.data
      const quizData = quizLoaded.map(quizes =>{
        const singleQuiz = quizes.name
        const quizSize = quizes.total
  
        const singleQuize = {
          name:singleQuiz,
          amount:quizSize
        }
        return singleQuize;
      })
      console.log(quizData)
      setData(quizData);
    })
  },[])


  return (
    <div>
    <h1 className='text-center'>Chart Of Quiz Data</h1>
    




    <Footer/>
    </div>
  )
}

export default Rechart