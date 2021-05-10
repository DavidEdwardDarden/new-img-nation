import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export const EditCollectionTitle = () =>{
    const [collection, setCollection] = useState({collectionTitle:""});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const history = useHistory();


//stolen (and retooled) from Register.js line 13
  const handleInputChange = (event) => {
    //Spread Syntax takes in an iterable (e.g an array) and expands it into individual elements.
    const newCollection = { ...collection };
    newCollection[event.target.id] = event.target.value;
    setCollection(newCollection);
  };

  
//also stolen (and retooled) from Register.js
  const handleCreateNew = (event) => {
   //prevent refresh of form html element
    event.preventDefault()
    fetch("http://localhost:8088/collections", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          userId: parseInt(sessionStorage.getItem("nation_user")),
                          img: image,
                          collectionTitle: collection.collectionTitle
                        })
                    })
                        .then(res => res.json())              
  };

const handleClickEvent = () =>{
    
}
    
    
    return(
        <div>
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
           <button onClick={handleClickEvent}> Submit </button>
        </div>
    )
}