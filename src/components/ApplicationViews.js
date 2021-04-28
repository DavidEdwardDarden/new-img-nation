import React from "react";
import { Route } from "react-router-dom";
import { CollectionList } from "./collections/collectionList";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { About } from "./aboutSection/about"
import { Contact } from "./contactSection/contact"
import { Logo } from "./logoSection/logo"
import { Profile } from "./profileSection/profile"
import { UploadImage } from "./uploadSection/upload"

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the component for news articles */}

      <Route exact path="/">
        <div>NEW IMAGE NATION</div>
        <Logo />
        <CollectionList />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/contacts">
        <Contact />
      </Route>

      <Route exact path="/profile">
        <Profile />
        <UploadImage />
      </Route>

    </>
  );
};
