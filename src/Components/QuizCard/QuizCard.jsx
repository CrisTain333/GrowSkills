import React from 'react'
import './quizcard.css'

const QuizCard = (props) => {
    const{logo,name,total}=props.data
  return (
    <div className='cardDiv'>
    <div className='imagediv'>
    <img src={logo} alt="" className='cardImg' />
    </div>
    <div className='TextDiv'>
        <p>{name}</p>

    </div>
    <div className='TextDiv'>
        
        <p>Tootal Quiz : <b>{total}</b> </p>
    </div>
    <div className='btnDiv'>

        <button className='btn btn-danger '>Start Quiz <i class="fa-solid fa-arrow-right"></i></button>
    </div>

    </div>
  )
}

export default QuizCard