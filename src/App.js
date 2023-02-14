import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";
import "./styles/landingPage.css";

function App() {
  return (
    <div>
      <div className="my-bg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
