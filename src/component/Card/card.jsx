import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./card.module.css";
import CountUp from "react-countup";

import cx from "classnames";

const Cards = ({ get: { confirmed, recovered, deaths, lastUpdate } }) => {
 
 if (!confirmed) {
   console.log("..................");
   return "..loading";
 }
  let active=0;

  active=confirmed.value-(recovered.value + deaths.value);





  return (
    <div className={styles.container}>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12} md={2}>
          <Card className={cx(styles.card, styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected Case
              </Typography>

              <Typography variant="body2" component="p">
                <strong>
                  <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.75}
                    separator=","
                  />
                </strong>
              </Typography>
              <Typography variant="body2" component="p">
                {new Date(lastUpdate).toDateString()} <br />
                Total Confirmed Case of Covid 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={2}>
          <Card className={cx(styles.card, styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered Case
              </Typography>

              <Typography variant="body2" component="p">
                <strong>
                  {" "}
                  <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2.75}
                    separator=","
                  />
                </strong>
              </Typography>
              <Typography variant="body2" component="p">
                {new Date(lastUpdate).toDateString()} <br />
                Total Recovered Case of Covid 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card className={cx(styles.card, styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Death Case
              </Typography>

              <Typography variant="body2" component="p">
                <strong>
                  {" "}
                  <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2.75}
                    separator=","
                  />
                </strong>
              </Typography>
              <Typography variant="body2" component="p">
                {new Date(lastUpdate).toDateString()} <br />
                Total Death Case of Covid 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={2}>
          <Card className={cx(styles.card, styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                active Case
              </Typography>

              <Typography variant="body2" component="p">
                <strong>
                  {" "}
                  <CountUp
                    start={0}
                    end={active}
                    duration={2.75}
                    separator=","
                  />
                </strong>
              </Typography>
              <Typography variant="body2" component="p">
                {new Date(lastUpdate).toDateString()} <br />
                Total Active Case of Covid 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
