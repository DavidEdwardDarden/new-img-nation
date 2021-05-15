import React, { useState, useEffect } from "react";
import {getCollectionByCollectionId} from "../../data/collectionManager";
import { useParams } from "react-router-dom";
import { getBackgrndimgsByCollectionId,getImgelementsByCollectionId } from "../../data/profileManager";
import "../profileSection/profileExpandedCollectionCard.css"

export const ForeignExpandedProfileCollectionList = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState({});
  const [imgelements, setImgelements] = useState([]);
  const [backgrndimgs, setBackgrndimgs] = useState([]);

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
