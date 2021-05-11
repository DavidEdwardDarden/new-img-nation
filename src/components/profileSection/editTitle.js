import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { updateCollection, getCollectionByCollectionId } from "../../data/collectionManager"
import "./editTitle.css"

export const EditCollectionTitle = () =>{
    const {collectionId} = useParams();
    const [collection, setCollection] = useState({collectionTitle:""});
    const [isLoading, setIsLoading] = useState(false);

 
   
  const history = useHistory();


  const handleInputChange = (event) => {
    //Spread Syntax takes in an iterable (e.g an array) and expands it into individual elements.
    //It makes a copy of the array or object so that you don't alter the original
    const newCollection = { ...collection };
    newCollection[event.target.id] = event.target.value;
    setCollection(newCollection);
  };

const updateExistingCollection = evt => {
    //prevent form from reloading
    evt.preventDefault()
    setIsLoading(true);

    const editedCollection = {
        id: collection.id,
        userId: parseInt(sessionStorage.getItem("nation_user")),
        img: collection.img,
        collectionTitle: collection.collectionTitle
    }

    updateCollection(editedCollection)
    .then(() => history.push("/profile")
    )
}


useEffect(() => {
    // debugger
    getCollectionByCollectionId(collectionId)
        .then(collection => {
          setCollection(collection);
          setIsLoading(false);
        });
    }, [collectionId]);

    return(
        <>
        <form>
          <fieldset>
            <div className="formgrid">
            <label htmlFor="collectionTitle"> Title: </label>
            <input
            id="collectionTitle"
            type="text"
            className="form-control"
            placeholder="Title Here"
            required
            autoFocus
            value={collection.collectionTitle}
            onChange={handleInputChange}
          />   
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingCollection}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    )
}