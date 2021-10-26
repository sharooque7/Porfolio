import React from "react";

// import some from "../Assets/somehwat.jpg";
// import Malam from "../Assets/Malam.jpg";
import church from "../Assets/church.jpg";

import Box from "@mui/material/Box";
import style from "./main.module.css";

export default function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        width: "100%",
        height: "24rem",
        color: "white",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(17, 24, 39, 1)",
       
      }}
    >
      <div className={style.main_content}>
        <img
          className={style.main_content_image}
          src={church}
          alt="profile"
        ></img>
        <div className={style.main_content_about}>
          <strong>About me</strong>
          <br />
          Hello! My name is Moahmmed Sharooque . I am a self-driven learner.
          Also I like working in a team. I am focusing all my effort on the
          impact I can leave on this world! and i love working with technologies
          which improves creativity
        </div>
      </div>
    </Box>
  );
}
