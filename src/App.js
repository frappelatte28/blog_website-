import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./images/nav_image.jpg";
import Navbar from "./navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Template from "./template.js";
import Cards from "./cards.js";
import Topics from "./topics.js";
import Footer from "./footer.js"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <div>
              <img src={image} alt="logo" className="nav_image"></img>
            </div>
            <Topics />
            <Cards />
            <Footer/>
          </Route>
          <Route exact path="/template/:id" component={Template} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
