import React, { useState, useEffect } from "react";
import {getCollectionByCollectionId} from "../../data/collectionManager";
import { useParams, useHistory } from "react-router-dom";
import {deleteBackgrndimgsByBackgroundImageId, deleteImgElementsByBackgroundImageId, 
  getBackgrndimgsByCollectionId,getImgelementsByCollectionId, deleteCollectionById} from "../../data/profileManager";
// import "./profileExpandedCollectionCard.css"
import "../profileSection/profileExpandedCollectionCard.css"
// import "./upload.css";

export const ForeignExpandedProfileCollectionList = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState({});
  const [imgelements, setImgelements] = useState([]);
  const [backgrndimgs, setBackgrndimgs] = useState([]);

  const history = useHistory();

  const handleGetCollection = (id) => {
    getCollectionByCollectionId(id).then((response) => {
      // console.log(response) 
      setCollection(response);
    });
  };

  const handleGetImgElement = (collectionId) => {
    getImgelementsByCollectionId(collectionId).then((response) => {
      setImgelements(response);
    });
  };

  const handleGetBackgroundImages = (collectionId) => {
    getBackgrndimgsByCollectionId(collectionId).then((response) => {
      setBackgrndimgs(response);
    });
  };


const handleDeleteBackgroundImages = (id, collectionId) => {
  console.log("click")
  //deletes a background image by the id of the background image 
  //that the user clicks the delete button under
  // debugger
  deleteBackgrndimgsByBackgroundImageId(id)
  //"anonynous function" ()=>
  .then(()=> handleGetBackgroundImages(collectionId))
    //"callback function" example:
  // .then( handleGetBackgroundImages)
  //"callback function" example:
  // .then( ()=>handleGetBackgroundImages())
    
}



const handleDeleteImageElements = (id, collectionId) => {
  //deletes a background image by the id of the background image 
  //that the user clicks the delete button under
  deleteImgElementsByBackgroundImageId(id)
  
     .then(()=>handleGetImgElement(collectionId))
  
}


const handleDeleteCollection = (id) => {
  
  if (window.confirm("Are you sure you want to delete this collection?")){
  deleteCollectionById(id)
.then(()=>
history.push("/profile")
)
  }
}

// console.log(collectionId)
const handleEdit = (collectionTitle) =>{
  history.push(`/edittitle/${collectionId}`)
}



  useEffect(() => {
    handleGetCollection(collectionId);
  }, [collectionId]);

  useEffect(() => {
    handleGetImgElement(collectionId);
  }, [collectionId]);

  useEffect(() => {
    handleGetBackgroundImages(collectionId);
  }, [collectionId]);

  return (
    <>
      <div className="centertime">
      <h2 className="grayme" >"{collection.collectionTitle}"</h2>
        <br />
        <img className="brdrme" src={collection.img} alt="collection" />
        <br />
        <br />


        {backgrndimgs.map((backgrndimg) => (
        <div key={backgrndimg.id} className="centertime">
          <img className="limit1" src={backgrndimg.imgurl} alt="backgroundimg" />
               <br/>
               <br/>
          </div>
        ))}

        <br />
        <br />

        {imgelements.map((imgelements) => (
         <div key={imgelements.id} className="centertime"> 
          <img className="limit2" src={imgelements.imgurl} alt="imgelement" />
             <br/>
             <br/>
          </div>
        ))}

      </div>
      <br />
      <br />
    </>
  );
};