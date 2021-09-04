import { makeStyles, Collapse } from "@material-ui/core";
import { Col, Image, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./humanR.css";
import humanrights1 from "../../Assests/humanRights1.jpg";
import humanrights2 from "../../Assests/humanRights2.jpg";
import humanrights3 from "../../Assests/humanRights3.jpg";

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
    height: "2rem",
    margin: "auto",
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
  },
  images: {
    padding: "2rem",
    
    display: "flex",
    justifyContent: "center",
    overflow: 'hidden'
  },
  img: {
    width: "18rem",
    height: "18rem",
    padding: "0",
    margin: "1rem",
    border: "0.3rem solid #fff",
    transition: 'all 0.5s ease',
    '&:hover':{
      transform: 'scale(1.1)'
    }
  },
}));

export default function HumanRights() {
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
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      ></Collapse>
    </>
  );
}
