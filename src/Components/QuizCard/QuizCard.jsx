import React from 'react'
import { Link } from 'react-router-dom'
import './quizcard.css'


const QuizCard = (props) => {
    const{logo,name,total,id}=props.data
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

  <Link to={`/quiz/${id}`}>
  <button className='btn btn-danger '>Start Quiz <i className="fa-solid fa-arrow-right"></i></button>
  </Link>
    </div>

    </div>
  )
}

export default QuizCard