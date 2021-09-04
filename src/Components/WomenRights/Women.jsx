import { makeStyles, Collapse } from "@material-ui/core";
import { Container, Col, Image, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./Women.css";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import contactImage from "./Contacts.jpeg";

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
}));

export default function HumanRights() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const year = new Date().getFullYear();

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

      <div className="rights">
        <h1>WOMEN RIGHTS</h1>
        <div className={classes.underLine2}></div>

        <div>
          <div class="container1">
            <ul class="cards">
              <Cards
                title="Right to Equal Pay"
                image="https://cdn-icons-png.flaticon.com/512/3037/3037156.png"
                content="According to the provisions listed under the Equal Remuneration Act
                , one cannot be discriminated on the basis of sex when it comes to salary,
                 pay or wages.Working women have the right to draw an equal salary, as compared
                 to men"
              />
              <Cards
                title="Right against Domestic Violence"
                image="https://img-premium.flaticon.com/png/512/2517/premium/2517176.png?token=exp=1630771227~hmac=733be050dc8617c8e8240ef39e3c7aff"
                content="This law looks to protect women from domestic violence (including verbal, economic, emotional and sexual) by the hands of any male relative.
                The accused shall be punished with a non-bailable imprisonment for a term
                 which may extend to three years and shall also be liable to fine."
              />
              <Cards />
            </ul>
          </div>
          <div class="container1">
            <ul class="cards">
              <Cards />
              <Cards />
              <Cards />
            </ul>
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
