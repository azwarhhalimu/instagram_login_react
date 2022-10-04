import logo from "./logo.svg";
import "./App.css";
import Toolbar from "./komponen/Toolbar";
import Story from "./komponen/Story";
import Bottom_bar from "./komponen/Bottom_bar";
import Content from "./komponen/Content";

function App() {
  return (
    <>
      <Toolbar />
      <Story />
      <Content />
      <Bottom_bar />
    </>
  );
}

export default App;
