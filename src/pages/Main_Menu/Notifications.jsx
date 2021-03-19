import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from '../../components/utils/header'
import avatar from "../../assets/wahid.jpg";

const useStyles = makeStyles((theme) => ({
  notifications: {
    width: "75%",
    backgroundColor: "rgb(255 255 255 / 60%)",
    margin: "4rem auto 0",
    padding: "6rem",
    boxShadow: 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF'
  },
  story: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // paddingLeft: "9rem",
    transform: "skewX(-12deg)",
    textOverflow: "hidden",
    fontSize: "inherit",
    // "&:hover": {
    //     backgroundColor: 'red',
    //     story__img: {
    //         transform: "scale(1)",
    //         filter: "blur(3px) brightness(80%)",
    //     }
    // },
    // "&:hover story__caption": {
    //   transform: "translate(-50%, -50%)",
    //   opacity: 1,
    // },
    // "&:hover &__img": {
    //   transform: "scale(1)",
    //   filter: "blur(3px) brightness(80%)",
    // },
  },
  story__shape: {
    width: "10rem",
    height: "10rem",
    float: "left",
    clipPath: "circle(50% at 50% 50%)",
    shapeOutside: "circle(50% at 50% 50%)",
    transform: "translateX(-3rem) skewX(11deg)",
    position: "relative",
  },
  story__img: {
    height: "100%",
    transform: "translateX(-4rem) scale(1.4)",
    backfaceVisibility: "hidden",
    transition: "all 0.5s",
  },
  story__text: {
    transform: "skewX(12deg)",
  },
  story__caption: {
    color: "#fff",
    transform: "translate(-50%, 20%)",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "all 0.5s",
    opacity: 0,
  },
}));

const Notifications = () => {
  const classes = useStyles();
  return (
    <>
      <Header data="Notifications"/>
      <div className={classes.notifications}>
        <div className={classes.story}>
          <figure className={classes.story__shape}>
            <img className={classes.story__img} src={avatar} alt="" />
            <figcaption className={classes.story__caption}></figcaption>
          </figure>
          <div className={classes.story__text}>
            <h3>Computer Network class cancelled</h3>
            <p>
              Due to some reason, I would not be able to take any classes today.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              consequuntur consectetur fugiat at recusandae beatae, veniam nulla
              optio inventore sit facere repudiandae provident,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
