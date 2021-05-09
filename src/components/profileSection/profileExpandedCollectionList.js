import React, { useState, useEffect } from "react";
import {getCollectionByCollectionId} from "../../data/collectionManager";
import { useParams } from "react-router-dom";
import "./profileCollectionList.css";
import {deleteBackgrndimgsByBackgroundImageId, deleteImgElementsByBackgroundImageId, 
  getBackgrndimgsByCollectionId,getImgelementsByCollectionId} from "../../data/profileManager";

export const ExpandedProfileCollectionList = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState({});
  const [imgelements, setImgelements] = useState([]);
  const [backgrndimgs, setBackgrndimgs] = useState([]);

  const handleGetCollection = (id) => {
    getCollectionByCollectionId(id).then((response) => {
      console.log(response)  //This is coming back CORRECT!
      setCollection(response);
    });
  };

  const handleGetImgElement = (collectionId) => {
    getImgelementsByCollectionId(collectionId).then((response) => {
      console.log(response) //This is coming back WRONG!
      setImgelements(response);
    });
  };

  const handleGetBackgroundImages = (collectionId) => {
    getBackgrndimgsByCollectionId(collectionId).then((response) => {
      console.log(response)  //This is coming back WRONG!
      setBackgrndimgs(response);
    });
  };


const handleDeleteBackgroundImages = (id, collectionId) => {
  //deletes a background image by the id of the background image 
  //that the user clicks the delete button under
  debugger
  deleteBackgrndimgsByBackgroundImageId(id)
  
    handleGetBackgroundImages(collectionId)
  
}

const handleDeleteImageElements = (id, collectionId) => {
  //deletes a background image by the id of the background image 
  //that the user clicks the delete button under
  deleteImgElementsByBackgroundImageId(id)
  
    handleGetImgElement(collectionId)
  
}




  useEffect(() => {
    console.log(collectionId)
    handleGetCollection(collectionId);
  }, [collectionId]);

  useEffect(() => {
    console.log(collectionId)
    handleGetImgElement(collectionId);
  }, [collectionId]);

  useEffect(() => {
     console.log(collectionId)
    handleGetBackgroundImages(collectionId);
  }, [collectionId]);

  return (
    <>
      <div className="centertime">
        <img className="brdrme" src={collection.img} alt="collection" />
        <br />
        <br />


        {backgrndimgs.map((backgrndimgs) => (
        <div>
          <img className="brdrme" src={backgrndimgs.imgurl} alt="backgroundimg" />
          <button className="makeMeBig" type="button" onClick={() =>
             handleDeleteBackgroundImages(backgrndimgs.id, backgrndimgs.collectionId)}>Delete</button>
          </div>
        ))}

        <br />
        <br />

        {imgelements.map((imgelements) => (
         <div> 
          <img className="brdrme" src={imgelements.imgurl} alt="imgelement" />
          <button className="makeMeBig" type="button" onClick={() =>
             handleDeleteImageElements(imgelements.id, imgelements.collectionId)}>Delete</button>
          </div>
        ))}

      </div>
      <br />
      <br />
    </>
  );
};
