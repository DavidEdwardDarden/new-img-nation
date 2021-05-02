// get a list of all the logged in user's collections
import React, { useState, useEffect } from 'react';
//import the components we will need
import { CollectionCard } from '../collections/collectionCard';
import { getAllCollections, deleteCollection} from '../../data/collectionManager';
// import {handleDeleteCollection} from "./collectionList"
import "./profileCollectionList.css"

export const ProfileCollectionList = () => {
    // The initial state is an empty array
    const [collections, setCollections] = useState([]);
    
    //returns all collection objects and stores in updated state
  const getCollections = () => {
    // After the data comes back from the API, we
    //  use the setCollections function to update state
    return getAllCollections()
    .then(collectionsFromAPI => {
      // console.log(collectionsFromAPI[0].collectionTitle)
      setCollections(collectionsFromAPI)
    });
  };

 // got the data from collections, from the API, on the component's first render
  useEffect(() => {
  
    getCollections();
  }, []);

  //Displays friendCards of logged in user
const collectionCards = () => {
    const allCollectionCards = collections.map(collection => {
      //if the logged in user's id matches the id of a currentUserId in the friends dataset
     if( parseInt(sessionStorage.getItem("nation_user")) === collection.userId){
       //return the friends that match the friendship
      return <CollectionCard key={collection.userId} 
    //   handleDeleteFriend={handleDeleteFriend} 
      collection={collection}  />
     }
     else{
      return  null 
     }
   } )
   return allCollectionCards
  }

return (
  
    <div className="cardList">
      {collectionCards()}</div>
 
)
      
};
