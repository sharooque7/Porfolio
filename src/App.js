import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Container from "@mui/material/Container";

const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <Main />
        <Section />
        <Project />
        <Footer />
      </Container>
    </>
  );
};

export default App;
