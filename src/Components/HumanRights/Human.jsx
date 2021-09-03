import { makeStyles, Collapse } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "4rem",
    fontWeight: "800",
    margin: '0',
    height: '60vh',
    padding: "4rem",
    background: '#053742',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function HumanRights() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.heading}>
      <Typewriter
        options={{
          strings: ["Human Rights."],
          autoStart: true,
          loop: true,
          delay: 200,
        }}
      />
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      ></Collapse>
    </div>
  );
}
