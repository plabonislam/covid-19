import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./chart.module.css";
import { Bar } from "react-chartjs-2";

const Chart = ({ get:{confirmed,recovered,deaths}, getcountry }) => {
  const [daily, setDaily] = useState([]);
  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
  };

  useEffect(() => {
    const da = async () => {
      const tt = await fetchDailyData();
      console.log(tt);

      setDaily(tt);

      ///
    };
    da();
  }, []);
console.log("now data are here",confirmed,getcountry)



const lineChart=( getcountry?null:(<Line
          data={{
            labels: daily.map(({ reportDate }) => reportDate),
            datasets: [
              {
                label: "Confirmed case",
                data: daily.map(({ confirmed }) => confirmed),
                fill: true, // Don't fill area under the line
                borderColor: "green", // Line color
              },
              {
                label: "Total death",
                data: daily.map(({ deaths }) => deaths),
                fill: true, // Don't fill area under the line
                borderColor: "red", // Line color
              },
            ],
          }}
          options={options}
        />));
    
const barhart = getcountry ? (
  <Bar
    data={{
      labels: ["Confirmed", "Deaths", "Recovered"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ["rgba(255,99,132,0.2)", "#2767cf", "#7bab96"],
          borderColor: ["rgba(255,99,132,1)", "#404b5c", "#404b5c"],
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [confirmed.value, deaths.value, recovered.value],
        },
      ],
    }}
    width={50}
    height={50}
    options={{}}
  />
) : null;
  return (
    <div className="App">
      <article className={styles.canvasContainer}>
        {lineChart}
        {barhart}
      </article>
    </div>
  );
};

export default Chart;

// [
//              {
//                label: "Infected",
//                data: daily.map(({ confirmed }) => confirmed),
//                fill: true, // Don't fill area under the line
//                borderColor: "blue", // Line color
//              },
//              {
//                label: "Death",
//                data: daily.map(({ deaths }) => deaths),
//                fill: false, // Don't fill area under the line
//                borderColor: "red", // Line color
//              }
//            ],
