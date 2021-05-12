//This file uploads background images
import React, { useState, useEffect } from "react";
import { addBackgrndimgs } from "../../data/uploadManager";
import { getCollectionByUserId } from "../../data/collectionManager";
import "./upload.css";


export const UploadBackgroundImage = () => {
  //setting state variables here----> "set a state variable"
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [collectionId, setcollectionId] = useState(0);
  //collection options represent each collection of the logged in user
  //each one will be represented as html options... <option></option>
  const [collectionOptions, setCollectionOptions] = useState([]);



  //This section is about uploading an image to Cloudinary and assigning it a designated URL
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

  // const displayUploadedImage = () =>{
  //   if(setLoading === false)
  //    return <img
  //         src={image}
  //         className="upldedimg"
  //         alt="uploadedimage"
  //         style={{ width: "300px" }}
  //       />
    
  // }


  //sets the state of the collection id and collectionOptions (and re-renders the page when state changes)
  useEffect(() => {
    //get all the collections of the logged in user
    getCollectionByUserId(sessionStorage.getItem("nation_user")).then(
      (collections) => {
        //set the collection options to the collections that belong
        //to the logged in user
        setCollectionOptions(collections);

        //set collection id's "default render value", to the id of
        //the users first collection... this is needed in case
        //the user doesn't make a choice on the dropdown
        setcollectionId(collections[0]?.id);
        //then map over CollectionOptions in JSX
      }
    );
  }, []);



  //assigns an image to a collection, by giving it a collection id
  const setImageToCollection = (collectionId) => {
    //sets the collection id to the value chosen in the dropdown menu
    //debugger
    setcollectionId(collectionId.target.value);
    console.log("Dropdown Id Selected", collectionId.target.value);
  };

  //Update the state of background image
  const saveImageToBackgroundImages = () => {
    const backgrndimg2save = {
      collectionId: parseInt(collectionId),
      imgurl: image,
    };
    if (backgrndimg2save.imgurl === "" || null) {
      alert("Image unable to upload.");
    } else {
      //puts the uploaded image in the dataset under backgrndimgs when the user chooses an image file
      addBackgrndimgs(backgrndimg2save);
    }
    alert("Image will appear in PROFILE section under chosen collection.");
  };

  return (
    <div className="centerme">
       <h1 className="steps" >STEP 2</h1>
       <hr className="underline"></hr>
      <h1 className="uploadtitle">Upload a Background Image</h1>

      <label className="moveright" htmlFor="collectionNumber">
        Choose a collection to save your image to:{" "}
      </label>
      <select
        onChange={setImageToCollection}
        name="collectionNumber"
        id="collectionNumber"
      >
        {collectionOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.collectionTitle}
          </option>
        ))}
      </select>

      <br />

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


{/* <div>
{displayUploadedImage}
</div> */}
      <br />

      <div></div>
      <button className="centerme2" onClick={saveImageToBackgroundImages}>
        Submit
      </button>

      <br />
    </div>
  );
};
