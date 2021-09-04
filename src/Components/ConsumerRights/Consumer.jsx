import { makeStyles, Collapse } from "@material-ui/core";
import { Typography, Grid } from "@material-ui/core";
import { Col, Image, Row } from "react-bootstrap";
import justice from "../../Assests/balance.png";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./Consumer.css";

import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "4rem",
    fontWeight: "800",
    margin: "0",
    padding: "1rem 0rem 0rem",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    textTransform: "uppercase",
  },
  underLine: {
    borderTop: "0.5rem solid #293039",
    width: "50%",
    height: "5rem",
    margin: "auto",
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
  },
  images: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  img: {
    width: "22rem",
    height: "18rem",
    padding: "1",
    margin: "1rem",
    border: "0.3rem solid #fff",
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

export default function ConsumerRights() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      <div className="head">
        <div className={classes.images}>
          <Row>
            <Col style={{ display: "inline-block" }}>
              <Image
                src="https://images.unsplash.com/photo-1521566652839-697aa473761a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                className={classes.img}
              />
            </Col>
            <Col style={{ display: "inline-block" }}>
              <Image
                src="https://images.unsplash.com/photo-1571597438372-540dd352bf41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                className={classes.img}
              />
            </Col>
            <Col style={{ display: "inline-block" }}>
              <Image
                src="https://images.unsplash.com/photo-1580250729659-e5cb6c5c110d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                className={classes.img}
              />
            </Col>
          </Row>
        </div>
        <div className={classes.heading}>
          <Typewriter
            options={{
              strings: ["Consumer Rights."],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          />
        </div>
        <div className={classes.underLine}></div>
      </div>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}></Collapse>

      <Grid container spacing={2} className={classes.uphold}>
        <Grid md={7} sm={12} className={classes.slides}>
          <Typography className={classes.upholdText} variant="h3">
            Why upholding these rights is important?
          </Typography>
          <div className={classes.underLine2}></div>
        </Grid>
        <Grid md={5} sm={12} className={classes.slides}>
          <div className={classes.slide}>
            <Image
              src={justice}
              alt="justice"
              style={{ height: "70%", margin: "9% auto", display: "flex" }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
