import style from "./Header.module.css";

import * as React from "react";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "100%",
        height: "24rem",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        objectPosition: "50% 50%",
      }}
    >
      <div className={style.header__image}></div>
    </Box>
  );
}
