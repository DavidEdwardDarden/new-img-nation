// get a list of all the logged in user's collections
import React, { useState, useEffect } from "react";
//import the components we will need
import { ProfileCollectionCard } from "./profileCollectionCard";
import {getAllCollections, deleteCollection, getCollectionByCollectionId} from "../../data/collectionManager";
import { useHistory, useParams } from "react-router-dom";
import "./profileCollectionList.css";
import {getBackgrndimgsByCollectionId, getImgelementsByCollectionId} from "../../data/profileManager";


export const ExpandedProfileCollectionList = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState([]);
    const[imgelements, setImgelements] = useState([]);
  //   const[backgrndimgs, setBackgrndimgs] = useState([]);

  const handleGetCollection = (id) => {
    getCollectionByCollectionId(id).then((response) => {
      console.log(response);
      setCollection(response);
    });
    //   getBackgrndimgsByCollectionId(id).then(response => {
    //     console.log(response)
    //     setCollection(response)
    // })
    getImgelementsByCollectionId(id).then((response) => {
        console.log(response);
        setImgelements(response);
    })
  };

  // console.log(getBackgrndimgsByCollectionId(1));
  // console.log(getImgelementsByCollectionId(1));

  useEffect(() => {
    handleGetCollection(collectionId);
    console.log(collectionId);
  }, [collectionId]);



  getCollectionByCollectionId();
  getImgelementsByCollectionId()
  // getBackgrndimgsByCollectionId()



  return (
    <>
      <div>
        {/* {collection.img} */}
    {/* {`./../images/${collection.img}`} */}

    <img className="brdrme" src={collection.img} 
            alt="collection" />

        <img className="replaceMe" src= {imgelements.imgurl}
            alt="imgelement" ></img>
            {/* <img className="replaceMe" src= {require(`../images/${backgrndimgs.imgurl}`).default} 
            alt="collection" ></img>  */}
      </div>
    </>
  );
};
