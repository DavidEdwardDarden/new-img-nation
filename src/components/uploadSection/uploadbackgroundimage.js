//This file uploads background images
import React, { useState } from "react";
import { addBackgrndimgs } from "../../data/uploadManager";
import "./upload.css";


export const UploadBackgroundImage = () => {
  //setting state variables here----> "set a state variable"
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [collectionId, setcollectionId] = useState(0);
  



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

      <div></div>
      <button className="centerme2" onClick={saveImageToBackgroundImages}>
        Submit
      </button>

      <br />
    </div>
  );
};
