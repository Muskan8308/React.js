import HeadingName from "./components/HeadingName"
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import "./App.css";

function App() 
{
  return (
    <div className="container">
      <center>
        <HeadingName/>
        <Content1/>
        <Content2/>
      </center>
      
    </div>
  );
}

export default App;