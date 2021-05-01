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
import { Footer } from "./footerSection/footer"

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the component for news articles */}

      <Route exact path="/">
        <CollectionList />
        <Footer />
      </Route>

      <Route exact path="/login">
        <Login />
        <Footer />
      </Route>

      <Route exact path="/register">
        <Register />
        <Footer />
      </Route>

      <Route exact path="/about">
        <About />
        <Contact />
        <Footer />
      </Route>

      <Route exact path="/profile">
        <Profile />
        <Footer />
      </Route>

      <Route exact path="/upload">
        <UploadImage />
        <Footer />
      </Route>

    </>
  );
};
