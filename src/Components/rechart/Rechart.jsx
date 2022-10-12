import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import './rechart.css'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Rechart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const quizLoaded = data.data.data;
      const quizData = quizLoaded.map((quizes) => {
        const singleQuiz = quizes.name;
        const quizSize = quizes.total;

        const singleQuize = {
          name: singleQuiz,
          total: quizSize,
        };
        return singleQuize;
      });
      setData(quizData);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center">Chart Of Quiz Data</h1>

    <div className="charDiv">
  
    <BarChart
          width={280}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#ff006e" />
        </BarChart>
    </div>
      <Footer />
    </div>
  );
};

export default Rechart;
