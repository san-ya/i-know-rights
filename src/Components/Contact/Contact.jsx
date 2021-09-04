import React from 'react'
import './contact.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    contact: {
        color: '#293039'
    },
  underLine: {
    borderTop: "0.4rem solid #293039",
    width: "80%",
    height: "5rem",
    margin: "auto",
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
  },
  slide: {
      [theme.breakpoints.down('sm')]: {
          backgroundColor: 'pink'
      }
  }
}));

export default function Contact() {
    const classes =  useStyles();
    return (
        <div className="contact">
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src="https://raw.githubusercontent.com/AnshikaG0219/i-know-rights/women-rights/src/Components/WomenRights/Contacts.jpeg?token=AJ7KIPRLVUTK6DEXCDYD223BHTZ2E"
                style={{ height:300, margin: '6rem'}}
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
                  }}
                >
                  Contact Details In Case Rights are Violated
                </h2>
                <div className={classes.underLine}></div>
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
    )
}
