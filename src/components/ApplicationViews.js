import React from "react";
import { Route } from "react-router-dom";
import { CollectionList } from "./collections/collectionList";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { About } from "./aboutSection/about"
import { Contact } from "./contactSection/contact"
import { Profile } from "./profileSection/profile"
import { Footer } from "./footerSection/footer"
import { ProfileCollectionList } from "./profileSection/profileCollectionList";
import { ExpandedProfileCollectionList } from "./profileSection/profileExpandedCollectionList"
import { CreateNew } from "./createNewSection/createNew"
import { EditCollectionTitle } from "./profileSection/editTitle"
import { ForeignProfile } from "./foreignProfileSection/foreignProfile"
import { ForeignProfileCollectionList } from "./foreignProfileSection/foreignProfileCollectionList"
import { ForeignExpandedProfileCollectionList } from "./foreignProfileSection/foreignProfileExpandedCollectionList"

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
        <ProfileCollectionList />
        <Footer />
      </Route>

      <Route exact path="/expandedcollection/:collectionId(\d+)">
       <ExpandedProfileCollectionList />
        <Footer />
      </Route>

      <Route exact path="/createnew"> 
        <CreateNew />
        <Footer />
       </Route> 

       <Route exact path="/edittitle/:collectionId(\d+)"> 
        <EditCollectionTitle />
        <Footer />
       </Route> 

       <Route exact path="/foreignprofile/:userId(\d+)"> 
        <ForeignProfile />
        <ForeignProfileCollectionList />
        <Footer />
       </Route> 

       <Route exact path="/foreignexpandedcollection/:collectionId(\d+)">
       <ForeignExpandedProfileCollectionList />
        <Footer />
      </Route>
    </>
  );
};
