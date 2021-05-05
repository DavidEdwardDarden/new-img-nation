// get a list of all the logged in user's collections
import React, { useState, useEffect } from 'react';
import { ProfileCollectionCard } from './profileCollectionCard';
import { getAllCollections, deleteCollection} from '../../data/collectionManager';
// import {handleDeleteCollection} from "./collectionList"
import { useHistory, useParams } from "react-router-dom"
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

  //Displays collectionCards of logged in user
const collectionCards = () => {
    const allCollectionCards = collections.map(collection => {
      console.log(collection)
      //if the logged in user's id matches the id of user with a collection
     if( parseInt(sessionStorage.getItem("nation_user")) === collection.userId){
      
       //return the collections that match the user
      return <ProfileCollectionCard key={collection.userId} 
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
