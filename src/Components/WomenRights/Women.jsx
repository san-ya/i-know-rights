import { makeStyles, Collapse, Typography, Grid } from "@material-ui/core";
import { Container, Col, Image, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./Women.css";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import contactImage from "./Contacts.jpeg";
import justice from "../../Assests/balance.png";
import cardDetails from "./womenRightCards";

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
    padding: "5rem 2rem 1.5rem",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
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
  rightsHeading: {
    margin: "0",
    paddingTop: "5rem",
    fontSize: "2rem",
  },
  underLine2: {
    borderTop: "0.4rem solid #293039",
    width: "39%",
    height: "2rem",
    margin: "auto",
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
    marginBottom: "55px",
  },
  underLine3: {
    borderTop: "0.4rem solid #293039",
    width: "80%",
    marginLeft: "73px",
    height: "2rem",
    display: "flex",
    justifyContent: "center",
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
  underLine4: {
    borderTop: "0.4rem solid #00C2CB",
    width: "97%",
    marginLeft: "1.5rem",
    marginTop: "0.5rem",
    display: "inline-block",
  },
  slides: {
    display: "inline-block",
  },
  slide: {
    height: "70vh",
    width: "37vw",
    backgroundColor: "#00C2CB",
    display: "inline-block",
    margin: "4.5rem 0 2rem 3rem",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem auto",
      display: "flex",
      justifyContent: "center",
      width: "80vw",
    },
  },
}));

export default function HumanRights() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const year = new Date().getFullYear();

  function createCard(card) {
    return (
      <Cards
        key={card.id}
        title={card.title}
        content={card.content}
        image={card.image}
      />
    );
  }

  return (
    <>
      <div className="head">
        <div className={classes.images}>
          <Row>
            <Col style={{ display: "inline-block" }}>
              <Image
                src="https://mk0supermajoritp2cqu.kinstacdn.com/wp-content/uploads/2020/03/shutterstock_1110245396-1145x700.jpg"
                className={classes.img}
              />
            </Col>
            <Col style={{ display: "inline-block" }}>
              <Image
                src="https://images.theconversation.com/files/209024/original/file-20180306-146671-haxeo6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"
                className={classes.img}
              />
            </Col>
            <Col style={{ display: "inline-block" }}>
              <Image
                src="https://images.livemint.com/img/2019/12/02/600x338/112165fa-14f4-11ea-b535-b6b83ed1ad8f_1575305179425_1575305275443.jpg"
                className={classes.img}
              />
            </Col>
          </Row>
        </div>
        <div className={classes.heading}>
          <Typewriter
            options={{
              strings: ["Women Rights."],
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
          <div className={classes.underLine4}></div>
          <p
            style={{
              color: "white",
              justifyContent: "space-evenly",
              margin: "1rem 0 1rem 2rem",
              padding: "1rem 0 1.5rem",
              fontSize: "1.5rem",
              fontWeight: "300",
              textAlign: "justify",
            }}
          >
            Millions of women around the world experience compounded forms of
            discrimination — due to factors such as their age, ethnicity,
            disability, or socio-economic status — in addition to their gender.
            Effectively ensuring women’s human rights requires, firstly, a
            comprehensive understanding of the social structures and power
            relations that frame not only laws and politics but also the
            economy, social dynamics and family and community life. Harmful
            gender stereotypes must be dismantled, so that women are no longer
            viewed in the light of what women “should” do and are instead seen
            for who they are: unique individuals, with their own needs and
            desires.
          </p>
        </Grid>
        <Grid md={5} sm={12} className={classes.slides}>
          <div className={classes.slide}>
            <Image
              src={justice}
              alt="justice"
              style={{ height: "70%", margin: "10% auto", display: "flex" }}
            />
          </div>
        </Grid>
      </Grid>

      <div className="rights">
        <h1>WOMEN RIGHTS</h1>
        <div className={classes.underLine2}></div>

        <div>
          <div class="container1">
            <ul class="cards">{cardDetails.map(createCard)}</ul>
          </div>
        </div>
      </div>
      <div className="contact">
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src={contactImage}
                style={{ height: "370px", margin: "90px 160px 90px 60px" }}
              />
            </Col>

            <Col md={6}>
              <div className="contactCard">
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    padding: "1.5rem 3.2rem",
                    paddingBottom: "5px",
                    // textAlign: "center",
                  }}
                >
                  Contact Details In Case Rights are Violated
                </h2>
                <div className={classes.underLine3}></div>
                <p style={{ padding: "0 25px" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum est nihil molestiae tempore. Labore dignissimos
                  temporibus cumque, vitae voluptates sapiente, non fuga
                  reiciendis praesentium quisquam obcaecati deleniti libero quae
                  dolor.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
