import React from "react";
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

  return (
    <div className={styles.container}>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12} md={3}>
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

        <Grid item xs={12} md={3}>
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
                Total Confirmed Case of Covid 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.card, styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected Case
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
                Total Confirmed Case of Covid 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
