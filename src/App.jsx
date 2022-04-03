import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  return (
    <>
      <Router>
        <nav
          class="navbar"
          style={{
            height: "50px",
            background: "linear-gradient(180deg, #c0e9e2, transparent)",
          }}
        >
          <FontAwesomeIcon icon={faListCheck} />
          <p style={{ fontFamily: "fantasy" }}>Welcome !!</p>
        </nav>

        <div className="container mt-3">
          {localStorage.token ? setAuthToken(localStorage.token) : null}
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
