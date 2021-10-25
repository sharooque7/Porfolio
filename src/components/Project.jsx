import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "./data";
import Box from "@mui/material/Box";
import style from "./Project.module.css";

export default function MediaCard() {
  console.log(data);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Projects</h3>
      <div className={style.project_container}>
        {/* <img src={aa} /> */}
        {data.map((data) => (
          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
              height: "26rem",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              objectPosition: "50% 50%",
              margin: "10px",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                width="60px"
                height="180px"
                image={data.image}
                alt={data.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  {data.title}
                </Typography>
                <Typography variant="" color="text.dark">
                  {data.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  type="link"
                  size="small"
                  target="_blank"
                  href={data.deployedURL}
                >
                  Live App
                </Button>
                <Button
                  type="link"
                  size="small"
                  target="_blank"
                  href={data.GithubFrontend}
                >
                  Frontend Github
                </Button>
                {data.GithubBackend && (
                  <Button
                    type="link"
                    size="small"
                    target="_blank"
                    href={data.GithubBackend}
                  >
                    Backend Github
                  </Button>
                )}
              </CardActions>
            </Card>
          </Box>
        ))}
      </div>
    </>
  );
}
