import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./createNew.css";

export const CreateNew = () => {
  const [collection, setCollection] = useState({collectionTitle:""});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const history = useHistory();


  //This section is about uploading an image to/from Cloudinary
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "newimages");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diry15tp3/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    
    const file = await res.json();
    
    //sets image equal to the image URL
    setImage(file.secure_url);
    
    setLoading(false);
  };



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

  return (
    <div className="centerme">
      <form className="formuplogin" onSubmit={handleCreateNew}>
        <h1 className="tryit">Create a title for your Composite Image.</h1>
        <fieldset className="designme">
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
        </fieldset>

        <br />

<input
  className="centerme"
  type="file"
  name="file"
  placeholder="Upload an image"
  onChange={uploadImage}
/>

<br />

{loading ? (
  <h3 className="centerme">Loading...</h3>
) : (
  <img
    src={image}
    className="upldedimg"
    alt="uploadedimage"
    style={{ width: "300px" }}
  />
)}


        <fieldset className="designme">
                    <button type="submit"> Submit </button>
        </fieldset>
      </form>
      <h1 className="senter">EXAMPLE:</h1>
      <img src= {require(`../images/Example1.JPG`).default} className="example" alt="example img"></img>
      <br />
     
      <h3 className="redme">
        A composite image is the image that you have created and want to share
        with everyone. It consists of a background image and multiple
        .png/vector elements that have been combined to create one single
        image... your composite image.
      </h3>

      <br />

      <h3 className="redme">
        After you upload your composite image... go to the UPLOAD PAGE to upload
        all of the different parts of your image. (the background and the .png
        images)
      </h3>



      <br />
    </div>
  );
};
