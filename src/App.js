import { Provider } from "react-redux";
import "./App.css";
import LoginPage from "./components/loginPage";
import { store, persistor } from "./redux/store";
import { Router, Switch } from "react-router-dom";
import HomePage from "./components/homePage";
import { history } from "./helpers/history";
import PrivateRoute from "./components/router/privateRoute";
import PublicRoute from "./components/router/publicRoute";
import { PersistGate } from "redux-persist/integration/react";
import { LogoutPage } from "./components/logoutPage";
import { Navbar , Nav } from "react-bootstrap";
import RegistrationPage from "./components/registrationPage";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Router history={history}>
          <Navbar>
            <Navbar.Brand href="/">Pharmc</Navbar.Brand>
               <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/features">Products</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            {/* <Route exact path="/" component={LoginPage}></Route> */}
            <PublicRoute exact path="/" component={LoginPage}></PublicRoute>
            <PublicRoute exact path="/register" component={RegistrationPage}></PublicRoute>
            <PrivateRoute
              exact
              path="/logout"
              component={LogoutPage}
            ></PrivateRoute>
            <PrivateRoute path="/home" component={HomePage}></PrivateRoute>
          </Switch>

          <div className="App">{/* <LoginPage/> */}</div>
        </Router>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
