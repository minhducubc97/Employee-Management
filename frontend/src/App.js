import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <br />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/create-employee"
              component={CreateEmployeeComponent}
            ></Route>
            <Route
              path="/update-employee/:id"
              component={UpdateEmployeeComponent}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/register" component={RegisterComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
