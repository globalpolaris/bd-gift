import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./component/Header";
import Night from "./component/NightMode";
import Home from "./component/Page/Home";
import How from "./component/Page/How";
import Gift from "./component/Page/Gift";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Night />
        <Switch>
          <Redirect from="/bd-gift" to="/" />
          <Route path="/project-z" exact component={Home} />
          <Route path="/how-it-started" component={How} />
          <Route path="/your-gift" component={Gift} />
        </Switch>
        {/* <Night />
        <Timer />
        <TestApi />
        <ReqDictionary /> */}
      </div>
    </Router>
  );
}

export default App;
