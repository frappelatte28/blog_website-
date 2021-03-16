import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Cards from "./cards.js"
import Footer from "../src/components/footer"
import image from "./images/nav_image.jpg"
import Navbar from "./components/navbar"
import Pagination from "./components/pagination"
import Topics from "./components/topics"
import Template from "./components/template"


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
            <Pagination/>
            <Footer/>
          </Route>
          <Route exact path="/template/:id" component={Template} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
