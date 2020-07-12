import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const Item=(props)=>{

    return (
      <Grid container item xs={12} spacing={2}>
        <React.Fragment>
          <Grid item xs={2}>
            <Paper>{props.name}</Paper>
          </Grid>
          
          <Grid item xs={1}>
            <Paper>{props.todayDeath}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>{props.todayConfirmed}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>{props.TotalConfirmed}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper>{props.TotalDeaths}</Paper>
          </Grid>

          <Grid item xs={1}>
            <Paper>{props.Totalrecovered}</Paper>
          </Grid>

          <Grid item xs={1}>
            <Paper>{props.Totalactive}</Paper>
          </Grid>

        </React.Fragment>
      </Grid>
    );

}


export default function Footer() {
  const [getCount, setcount] = useState([]);
  useEffect(() => {
    const pp= async ()=>{
       let {data}= await axios
          .get("https://corona-api.com/countries");
          console.log(data.data,"yyyyyyyyyyyyyyyyyyyyyyy");
        const Newdata=  data.data.map(item=>{
              return {
                name: item.name,
                date: item.updated_at,
                todayDeath: item.today.deaths,
                todayConfirmed: item.today.confirmed,
                TotalDeaths: item.latest_data.deaths,
                TotalConfirmed: item.latest_data.confirmed,
                Totalrecovered: item.latest_data.recovered,
                Totalactive: item.latest_data.critical,
              };
          })
         setcount(Newdata);
    }
    pp();
  }, []);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Paper>Name</Paper>
        </Grid>

        <Grid item xs={1}>
          <Paper>Today Deaths</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>Today Confirmed</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>Total Confirmed</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper>Total deaths</Paper>
        </Grid>

        <Grid item xs={1}>
          <Paper>Total Recovered</Paper>
        </Grid>

        <Grid item xs={1}>
          <Paper>Total Activate</Paper>
        </Grid>
        {getCount.map((it, ke) => {
          return <Item key={ke} {...it} />;
        })}
      </Grid>
    </div>
  );
}
