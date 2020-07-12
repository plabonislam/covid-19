import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./chart.module.css";
import { Bar } from "react-chartjs-2";

const Chart = ({ get: { confirmed, recovered, deaths }, getcountry }) => {
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    const da = async () => {
      const tt = await fetchDailyData();
      console.log(tt,"dalyyyyyyyyyyyyy");

      setDaily(tt);

      ///
    };
    da();
  }, []);
  console.log("now data are here", confirmed, getcountry);

  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
  };

  const lineChart = getcountry ? null : (
    <Line
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
    />
  );

  let active = 0;
  if (getcountry) active = confirmed.value - (deaths.value + recovered.value);
  const barhart = getcountry ? (
    <Bar
      data={{
        labels: ["Confirmed", "Deaths", "Recovered", "Active"],
        datasets: [
          {
            label: "CoVid-19 Diagram for " + getcountry,
            backgroundColor: ["green", "#2767cf", "#7bab96", "red"],
            borderColor: ["rgba(255,99,132,1)", "#404b5c", "#404b5c", "red"],
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [confirmed.value, deaths.value, recovered.value, active],
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
