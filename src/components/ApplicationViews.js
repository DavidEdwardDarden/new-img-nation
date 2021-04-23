import React from "react"
import { Route } from "react-router-dom"

import { CollectionList } from "./collections/collectionList"








export const ApplicationViews = () => {
  return (
    <>

        {/* Render the component for news articles */}
      <Route exact path="/">
        <CollectionList />
      </Route>
     
     
      
    </>
  )
}
