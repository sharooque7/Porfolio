import * as React from "react";
import Box from "@mui/material/Box";
import style from "./Section.module.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

export default function Sections() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        width: "100%",
        height: "41rem",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        objectPosition: "50% 50%",
      }}
    >
      <div className={style.section__one}>
        <span className={style.section_span}>
          <strong>More about me...</strong>
        </span>
        <hr />
        <p>
          Started my career as a backend developer .I was part of the team who
          were working on desktop application with c# and .NET as the language
          and framework and learned a lot of new cool stuffs related to the
          framework and technology .But as time goes my passion towards full
          stack engineer grew drastically, especially React and web development.{" "}
        </p>
        <p>
          {" "}
          I'm the kind of a person who is eager to learn new frameworks and
          explore new and efficient way to develop a software or a solution.
          Learning new things is always fulfilling for me.
        </p>

        <hr />
      </div>
      <div className={style.section__two}>
        <p>Skills</p>
        <Button
          variant="outlined"
          target="_blank"
          href="https://drive.google.com/file/d/1Lnv3bTQHED-5phMFqda3B9F93EtNf1Ue/view?usp=sharing"
          endIcon={<SendIcon />}
          color="warning"
        >
          Please download my resume here
        </Button>
        <div className={style.section__two_skills}>
          {" "}
          <ul>
            <li>JavaScript/ES6</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            <li>Styled components</li>
            <li>MaterialUI</li>
            <li>EJS/jQuery</li>
            <li>NoSQL/SQL</li>
            <li>MERN</li>
            <li>HTML/CSS</li>
            <li>GIT/Github</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </Box>
  );
}
