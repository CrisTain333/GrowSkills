import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div className='ftrDov'>
        <div className="ftr">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 mb-3  align-items-center">
        <h4>GrowSkills</h4> 
        <span className=" mb-md-0 text-muted">&copy; 2022 Company, GrowSkills</span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/Cristain.333/" target="_blank"><i
              className="fa-brands fa-facebook fa-2xl"></i></a></li>
        <li className="ms-3"><a className="text-muted" href="#" target="_blank"><i className="fa-brands fa-twitter fa-2xl"></i></a>
        </li>
        <li className="ms-3"><a className="text-muted" href="#" target="_blank"><i
              className="fa-brands fa-instagram fa-2xl"></i></a></li>
      </ul>
    </footer>
        </div>
    </div>
  )
}

export default footer