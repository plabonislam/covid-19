import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "./Card/card.module.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import cx from "classnames";
const Item = (props) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={3}>
        <Card className={cx(styles.card, styles.inf)}>
          <Typography color="textSecondary" gutterBottom>
            {props.name}
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={1}>
        <Card className={cx(styles.card, styles.inf)}>
          <Typography color="textSecondary" gutterBottom>
            {props.todayDeath}
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={1}>
        <Card className={cx(styles.card, styles.inf)}>
          <Typography color="textSecondary" gutterBottom>
            {props.todayConfirmed}
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={1}>
        <Card className={cx(styles.card, styles.inf)}>
          <Typography color="textSecondary" gutterBottom>
            {props.Totalactive}
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={1}>
        <Card className={cx(styles.card, styles.inf)}>
          <Typography color="textSecondary" gutterBottom>
            {props.Totalrecovered}
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={1}>
        <Card className={cx(styles.card, styles.inf)}>
          <Typography color="textSecondary" gutterBottom>
            {props.TotalDeaths}
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={1}>
        <Card className={cx(styles.card, styles.inf)}>
          <Typography gutterBottom>{props.todayConfirmed}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default function Footer() {
  const [getCount, setcount] = useState([]);
  useEffect(() => {
    const pp = async () => {
      let { data } = await axios.get("https://corona-api.com/countries");
      console.log(data.data, "yyyyyyyyyyyyyyyyyyyyyyy");
      const Newdata = data.data.map((item) => {
        //let deat = item.latest_data.deaths - item.today.deaths;
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
      });
      setcount(Newdata);
    };
    pp();
  }, []);

  return (
    // <div style={ {margin:"50px 0px"}}>
    //   <Grid container spacing={1}>
    //     <Grid item xs={2} style={{ border: "1px solid gray" }}>
    //       Name
    //     </Grid>

    //     <Grid item xs={1}>
    //       <Paper>Today Deaths</Paper>
    //     </Grid>
    //     <Grid item xs={2}>
    //       <Paper>Today Confirmed</Paper>
    //     </Grid>
    //     <Grid item xs={2}>
    //       <Paper> Confirmed</Paper>
    //     </Grid>
    //     <Grid item xs={1}>
    //       <Paper> deaths</Paper>
    //     </Grid>

    //     <Grid item xs={1}>
    //       <Paper> Recovered</Paper>
    //     </Grid>

    //     <Grid item xs={1}>
    //       <Paper> Activate</Paper>
    //     </Grid>

    <div className={styles.container}>
      <Grid container justify="center">
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.card, styles.inf)}>
            <Typography color="textSecondary" gutterBottom>
              Country
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={1}>
          <Card className={cx(styles.card, styles.inf)}>
            <Typography color="textSecondary" gutterBottom>
             Today Deaths
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={1}>
          <Card className={cx(styles.card, styles.inf)}>
            <Typography color="textSecondary" gutterBottom>
              Today Confirmed
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={1}>
          <Card className={cx(styles.card, styles.inf)}>
            <Typography color="textSecondary" gutterBottom>
              Activate
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={1}>
          <Card className={cx(styles.card, styles.inf)}>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={1}>
          <Card className={cx(styles.card, styles.inf)}>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={1}>
          <Card className={cx(styles.card, styles.inf)}>
            <Typography gutterBottom>Confirmed</Typography>
          </Card>
        </Grid>
      </Grid>

      {getCount.map((it, ke) => {
        return <Item key={ke} {...it} />;
      })}
    </div>
  );
}

// <Grid container item xs={12} spacing={0}>
//   <Grid item xs={2}>
//     <Paper>{props.name}</Paper>
//   </Grid>

//   <Grid item xs={1}>
//     <Paper>{props.todayDeath}</Paper>
//   </Grid>
//   <Grid item xs={2}>
//     <Paper>{props.todayConfirmed}</Paper>
//   </Grid>
//   <Grid item xs={2}>
//     <Paper>{props.TotalConfirmed}</Paper>
//   </Grid>
//   <Grid item xs={1}>
//     <Paper>{props.TotalDeaths}</Paper>
//   </Grid>

//   <Grid item xs={1}>
//     <Paper>{props.Totalrecovered}</Paper>
//   </Grid>

//   <Grid item xs={1}>
//     <Paper>{props.Totalactive}</Paper>
//   </Grid>
// </Grid>;
