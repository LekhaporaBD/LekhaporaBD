import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid orange",
    width: "60%",
    position: "relative",
    margin: "0 auto",
  },
}));

const Underline = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Underline;
