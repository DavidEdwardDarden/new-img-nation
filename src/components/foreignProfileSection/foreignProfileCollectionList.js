// get a list of all the logged in user's collections
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ForeignProfileCollectionCard } from './foreignProfileCollectionCard';
import { getAllCollections} from '../../data/collectionManager';


export const ForeignProfileCollectionList = () => {
    const {userId} = useParams();
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
    //I see that this should not be like this BUT!...
    //It works
    console.log(9)
    console.log("9")
    console.log(userId)
    console.log(collection.userId)
     if( userId == parseInt(collection.userId)){
      
      return <ForeignProfileCollectionCard key={collection.id} 
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
