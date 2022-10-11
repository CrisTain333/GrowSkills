import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import QuizCard from "../QuizCard/QuizCard";
import Footer from '../footer/Footer'
const Home = () => {
  const data = useLoaderData()
  // console.log(data)
  return (
    <>
    <div style={{background: "url(https://bootstrapious.com/i/snippets/sn-bg-image/bg.jpg)"}} className="page-holder bg-cover">

<div className="container py-5">
  <header className="text-center text-white py-5">
    <h1 className="display-4 font-weight-bold mb-4">Let's Take Your Skill To Next Level</h1>
    <p className="lead mb-0 text-center">Everything we do is practice for something greater than where we currently are. Practice only makes for improvement.</p>
    <p className="lead mt-3"> Don’t practice until you get it right. Practice until you can’t get it wrong.</p>
    <p className="lead mt-0">Knowledge is of no value unless you put it into practice</p>
  </header>

</div>
</div>

<div className="QuizContainer">
{
  data.data.map(e=><QuizCard key={e.id} data={e}/>)
}

</div>

<Footer/>
    </>
    
  );
};

export default Home;
