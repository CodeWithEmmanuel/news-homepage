import Header from "./components/Header";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import NewPosts from "./components/NewPosts";
import Featured from "./components/Featured";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Hero />
      <NewPosts />
      <Featured />
      <Overlay />
    </div>
  );
}

export default App;
