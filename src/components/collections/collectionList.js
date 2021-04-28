
import React, { useState, useEffect } from 'react';
//import the components we will need
import { CollectionCard } from './collectionCard';
import { getAllCollections, deleteCollection} from '../../data/collectionManager';
// import {handleDeleteCollection} from "./collectionList"


export const CollectionList = () => {
    // The initial state is an empty array
    const [collections, setCollections] = useState([]);
    //returns all collection objects and stores in updated state
  const getCollections = () => {
    // After the data comes back from the API, we
    //  use the setCollections function to update state
    getAllCollections()
    .then(collectionsFromAPI => {
      // console.log(collectionsFromAPI[0].collectionTitle)
      setCollections(collectionsFromAPI)
    });
  };

 // got the data from collections, from the API, on the component's first render
  useEffect(() => {
  
    getCollections();
  }, []);


return (
  
    <div className="cardList">
      {collections.map(collection =>
      <CollectionCard key={collection.id} collection={collection}/>
      )
    }</div>
 
)
      
};
