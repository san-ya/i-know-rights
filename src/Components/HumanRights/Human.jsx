import { makeStyles, Typography, Grid } from "@material-ui/core";
import { Col, Image, Row } from "react-bootstrap";
// import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./humanR.css";
import humanrights1 from "../../Assests/humanRights1.jpg";
import humanrights2 from "../../Assests/humanRights2.jpg";
import humanrights3 from "../../Assests/humanRights3.jpg";
import justice from "../../Assests/balance.png";
import cardDetails from "./cardDetails";
import RightsCard from "./RightsCard";

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
    borderTop: "0.4rem solid #293039",
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
  },
  img: {
    width: "18rem",
    height: "18rem",
    padding: "0",
    margin: "1rem",
    border: "0.3rem solid #fff",
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  uphold: {
    backgroundColor: "#293039",
    height: "80%",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    margin: "5rem auto",
  },
  upholdText: {
    color: "white",
    fontWeight: "800",
    margin: "2rem",
    display: "inline-block",
  },
  underLine2: {
    borderTop: "0.4rem solid #00C2CB",
    width: "85%",
    marginLeft: "1.5rem",
    marginTop: "0.5rem",
    display: "inline-block",
  },
  slides: {
    display: "inline-block",
  },
  slide: {
    height: "70vh",
    width: "40vw",
    backgroundColor: "#00C2CB",
    display: "inline-block",
    margin: "2rem 0rem",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem auto",
      display: "flex",
      justifyContent: "center",
      width: "80vw",
    },
  },
  cards: {
    width: "100%",
  },
}));

export default function HumanRights() {
  const classes = useStyles();
  // // const [setChecked] = useState(false);
  // // useEffect(() => {
  // //   setChecked(true);
  // }, []);

  return (
    <>
      <div className="head">
        <div className={classes.images}>
          <Row>
            <Col style={{ display: "inline-block" }}>
              <Image src={humanrights1} className={classes.img} />
            </Col>
            <Col style={{ display: "inline-block" }}>
              <Image src={humanrights2} className={classes.img} />
            </Col>
            <Col style={{ display: "inline-block" }}>
              <Image src={humanrights3} className={classes.img} />
            </Col>
          </Row>
        </div>
        <div className={classes.heading}>
          <Typewriter
            options={{
              strings: ["Human Rights."],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          />
        </div>
        <div className={classes.underLine}></div>
      </div>
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
      <Grid container className={classes.cards}>
        {cardDetails.map((card) => (
          <Grid card key={card.id} lg={4} md={6} sm={12} spacing={2}>
            <RightsCard card={card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
