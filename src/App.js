import { Provider } from "react-redux";
import "./App.css";
import LoginPage from "./components/loginPage";
import { store ,persistor } from "./redux/store";
import { Router, Switch } from "react-router-dom";
import HomePage from "./components/homePage";
import { history } from "./helpers/history";
import PrivateRoute from "./components/router/privateRoute";
import PublicRoute from "./components/router/publicRoute";
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
          {/* <Route exact path="/" component={LoginPage}></Route> */}
          <PublicRoute exact path='/' component={LoginPage}></PublicRoute>
          <PrivateRoute path='/home' component={HomePage}></PrivateRoute>
        </Switch>

        <div className="App">{/* <LoginPage/> */}</div>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
