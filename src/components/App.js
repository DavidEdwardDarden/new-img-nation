import React from "react"
import { Route, Redirect } from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import { ApplicationViews } from "./ApplicationViews"
import { Register } from "./auth/Register"
import { render } from "./nav/NavBurgerMenu";
import { Login } from "./auth/Login"


// function App() {
  
//   return (
//     <>
//     {/* <NavBar /> */}
//     <ApplicationViews />
// </>
//   );
// }

// export default App;

export const App = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("nation_user")) {
          return (
            <>
              <render />
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)