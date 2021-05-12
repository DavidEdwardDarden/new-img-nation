import React, { useState } from "react";
import "./createNew.css";

export const CreateNew = () => {
  const [collection, setCollection] = useState({collectionTitle:""});
  //loading stuff is usually implement to prevent a button from being pushed a many times in a row
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

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



//stolen (and retooled) from Register.js line 13 (for reference)
//Handles Input into text field
//an "event" can be something the browser does, or something a user does (a button is clicked or an input field is changed)
  const handleInputChange = (event) => {
    //Spread Syntax takes in an iterable (e.g an array) and expands it into individual elements.
    const newCollection = { ...collection };
    //here, id is referencing (allowing access to) the id of an html object/element
    //so you are assigning newCollection the value of the accessed input field (aka whatever the user typed in)
    newCollection[event.target.id] = event.target.value;
    //now you are setting the state of collection to 
    //the value of newCollection which is set to collection.collectionTitle in the HTML (value=collection.collectionTitle)
    setCollection(newCollection);
  };

  
//also stolen (and retooled) from Register.js (for reference)
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
                            .then(()=>alert("Image will appear under PROFILE section."))
  };

  return (
    <div className="centerme">
      <form className="formuplogin" onSubmit={handleCreateNew}>
      <h1 className="steps" >STEP 1</h1>
      <hr className="underline"></hr>
        <h3 className="tryit">Create a TITLE for your Composite Image.</h3>
        <fieldset className="designme">
          <label className="align" htmlFor="collectionTitle"> TITLE: </label>
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

<h1 className="tryit">Upload your masterpiece.</h1>

<input
  className="centerme"
  type="file"
  name="file"
  placeholder="Upload an image"
  onChange={uploadImage}
/>

<br />

{/* // if image is null and we are not loading then show nothing
//else if loading is true show loading
//if image is not null and loading is not true show image */}

{image === "" && !loading ? (
        ""
      ) : loading ? (
        <h3 className="centerme">Loading...</h3>
      ) : (
        <img
          src={image}
          className="upldedimg"
          alt="uploadedimage"
          style={{ width: "300px" }}
        />
      )}
<br />

       <div className="align">
                    <button className="button2" type="submit"> Submit </button>
      </div>
      </form>

      {/* <h3 className="redme">
        A composite image is the image that you have created and want to share
        with everyone. It consists of a background image and multiple
        .png images, that have been combined to create one single
        image... your composite image.
      </h3> */}

      {/* <h1 className="senter">EXAMPLE:</h1>
      <img src= {require(`../images/Example1.JPG`).default} className="example" alt="example img"></img> */}
     

    </div>
  );
};
