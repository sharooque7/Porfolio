import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import style from "./Footer.module.css";
// import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <div className={style.s}>
      {/* <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "5rem",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
      > */}
      <div className={style.footer_content}>
        <span>
          <MailOutlineIcon color="primary" />
        </span>
        <span>
          <span>sharooquethoufiq@gmail.com</span>
        </span>{" "}
        <span>
          <LocalPhoneIcon color="primary" />
        </span>
        <span> 9790683688</span>
        <span>
          <GitHubIcon color="primary" />
        </span>
        <span>
          <a href=" https://github.com/sharooque7" target="_blank">
            {" "}
            https://github.com/sharooque7
          </a>
        </span>
      </div>
      {/* </Box> */}
    </div>
  );
};

export default Footer;
