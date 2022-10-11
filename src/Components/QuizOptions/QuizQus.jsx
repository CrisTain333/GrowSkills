import React from 'react'
import './qu.css'
const QuizQus = (props) => {
    // console.log(props.data.options)
   const { question} = props.data
   const {options} =props.data

   const handleanswer=(e)=>{
    console.log(e.target.value)
  }

  return (
    <div className='quiDivs'>
        <div className='mainDiv'>
        <p className='text-center '>{question}</p>
        <div className='quizOptionDiv'>
            
                {
                    options.map(e=>{
                        return(
                            <>
                            <div className='qus'>
                            <input type="radio" id={e} name='ok' onChange={handleanswer} />
                            <label htmlFor={e}>{e}</label>
                            </div>
                            </>
                        )
                    })
                }
            
            
        </div>
        </div>
    </div>
  )
}

export default QuizQus