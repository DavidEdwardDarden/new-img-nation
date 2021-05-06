import React, { useState, useEffect } from "react";
import {getAllCollections,deleteCollection,getCollectionByCollectionId} from "../../data/collectionManager";
import { useHistory, useParams } from "react-router-dom";
import "./profileCollectionList.css";
import {getBackgrndimgsByCollectionId,getImgelementsByCollectionId} from "../../data/profileManager";

export const ExpandedProfileCollectionList = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState({});
  const [imgelements, setImgelements] = useState([]);
  const [backgrndimgs, setBackgrndimgs] = useState([]);

  const handleGetCollection = (id) => {
    getCollectionByCollectionId(id).then((response) => {
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
        <img className="brdrme" src={collection.img} alt="collection" />
        <br />
        <br />

        {imgelements.map((imgelements) => (
          <img className="brdrme" src={imgelements.imgurl} alt="imgelement" />
        ))}

        <br />
        <br />

        {backgrndimgs.map((backgrndimgs) => (
          <img className="brdrme" src={backgrndimgs.imgurl} alt="backgroundimg" />
        ))}
      </div>
      <br />
      <br />
    </>
  );
};
