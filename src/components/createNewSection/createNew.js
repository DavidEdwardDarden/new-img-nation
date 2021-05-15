//I could seperat background images section and image elements section into seperate elements
//I have chosen not to currently for time
import React, { useState } from "react";
import { addBackgrndimgs } from "../../data/uploadManager";
import { addImgElements } from "../../data/uploadManager";
import "./createNew.css";
import "../uploadSection/upload.css";

export const CreateNew = () => {
  const [collectiontitle, setCollectionTitle] = useState({ collectionTitle: "" });
  const [loading, setLoading] = useState(false);
  const [step1complete, setStep1Complete] = useState(false);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
const [newCollectionObject, setNewCollectionObject] = useState();

  //This section is about uploading an image to/from Cloudinary
  const uploadImage1 = async (e) => {
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
    setImage1(file.secure_url);

    setLoading(false);
  };


  //This section is about uploading an image to/from Cloudinary
  const uploadImage2 = async (e) => {
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
    setImage2(file.secure_url);

    setLoading(false);
  };

  //This section is about uploading an image to/from Cloudinary
  const uploadImage3 = async (e) => {
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
    setImage3(file.secure_url);

    setLoading(false);
  };




  //stolen (and retooled) from Register.js line 13 (for reference)
  //Handles Input into text field
  //an "event" can be something the browser does, or something a user does (a button is clicked or an input field is changed)
  const handleInputChange = (event) => {
    //Spread Syntax takes in an iterable (e.g an array) and expands it into individual elements.
    const newCollectionTitle = { ...collectiontitle };
    //here, id is referencing (allowing access to) the id of an html object/element
    //so you are assigning newCollection the value of the accessed input field (aka whatever the user typed in)
    newCollectionTitle[event.target.id] = event.target.value;
    //now you are setting the state of collection to
    //the value of newCollection which is set to collection.collectionTitle in the HTML (value=collection.collectionTitle)
    setCollectionTitle(newCollectionTitle);
  };

  //also stolen (and retooled) from Register.js (for reference)
  const handleCreateNew = (event) => {
    if(image1 !== ""){
    //prevent refresh of form html element
    event.preventDefault();
    fetch("http://localhost:8088/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: parseInt(sessionStorage.getItem("nation_user")),
        img: image1,
        collectionTitle: collectiontitle.collectionTitle,
      }),
    })
      .then((res) => res.json())
      .then((newCollectionObj) =>
       {
         setNewCollectionObject(newCollectionObj)
         console.log(newCollectionObj)
         setStep1Complete(true)
         alert("Excellent! Continue to STEP 2.")
        })
      //update state
    }
    else{
alert("Choose an image to upload.")
    }
  };




  //Update the state of background image
  const saveImageToBackgroundImages = () => {
    if(step1complete === true){
    const backgrndimg2save = {
      collectionId: parseInt(newCollectionObject.id),
      imgurl: image2
    };
    if (backgrndimg2save.imgurl === "" || null) {
      alert("Image unable to upload.");
    } else {
      //puts the uploaded image in the dataset under backgrndimgs when the user chooses an image file
      addBackgrndimgs(backgrndimg2save);
    }
    alert("Excellent! Continue to STEP 3.");
  }
  else{
    alert("Please complete STEP 1 first.")
  }
  };

  const saveImageToImageElements = () => {
    if(step1complete === true){
    const imgelement2save = {
      collectionId: parseInt(newCollectionObject.id),
      imgurl: image3
    };
    if (imgelement2save.imgurl === "" || null) {
      alert("Image unable to upload.");
    } else {
      //puts the uploaded image in the dataset under backgrndimgs when the user chooses an image file
      addImgElements(imgelement2save);
    }
    alert("Continue to upload PNG images. When complete, go to PROFILE.");
  }
  else{
    alert("Please complete STEP 1 first.")
  }
  };

  return (
    <div className="stepContainer">
    <div className="step1">
      <form className="formuplogin2" onSubmit={handleCreateNew}>
        <h1 className="steps">STEP 1</h1>
        <hr className="underline"></hr>
        <h5 className="tryit">Create a TITLE for your Composite Image.</h5>
        <fieldset className="designme">
          <label className="align" htmlFor="collectionTitle">
            {" "}
            TITLE:{" "}
          </label>
          <input
            id="collectionTitle"
            type="text"
            className="form-control"
            placeholder="Title Here"
            required
            autoFocus
            value={collectiontitle.collectionTitle}
            onChange={handleInputChange}
          />
        </fieldset>

        <br />

        <h3 className="tryit">Upload your masterpiece.</h3>

        <input
          className="centermenow"
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage1}
        />

        <br />

        {/* // if image is null and we are not loading then show nothing
//else if loading is true show loading
//if image is not null and loading is not true show image */}

        {image1 === "" && !loading ? (
          ""
        ) : loading ? (
          <h3 className="centerme">Loading...</h3>
        ) : (
          <img
            src={image1}
            className="upldedimg"
            alt="uploadedimage"
            style={{ width: "300px" }}
          />
        )}
        <br />


        <div className="align">
          <button className="button2" type="submit">
            {" "}
            SUBMIT{" "}
          </button>
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
<br/>

<div className="step2">
<h1 className="steps" >STEP 2</h1>
<hr className="underline"></hr>
<h1 className="uploadtitle">Upload a Background Image</h1>

<input
 className="centermenow"
 type="file"
 name="file"
 placeholder="Upload an image"
 onChange={uploadImage2}
/>

<br />

{/* // if image is null and we are not loading then show nothing
//else if loading is true show loading
//if image is not null and loading is not true show image */}

{image2 === "" && !loading ? (
 ""
) : loading ? (
 <h3 className="centerme">Loading...</h3>
) : (
 <img
   src={image2}
   className="upldedimg"
   alt="uploadedimage"
   style={{ width: "300px" }}
 />
)}

<br />
<div className="align">
<button className="button2" onClick={saveImageToBackgroundImages}>
 SUBMIT
</button>
</div>
<br />
</div>
<br/>

<div className="step3">
      <h1 className="steps">STEP 3</h1>
      <hr className="underline"></hr>
      <h1 className="uploadtitle">Upload .PNG Images</h1>
      {/* <h3 className="redme">
        Make sure your image has a checkered background. A checkered background
        indicates transparency. Some images have a fake checkered background...
        so be ware!
      </h3> */}

      <br />

      <input
        className="centermenow"
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage3}
      />

      <br />

      {/* // if image is null and we are not loading then show nothing
//else if loading is true show loading
//if image is not null and loading is not true show image */}

      {image3 === "" && !loading ? (
        ""
      ) : loading ? (
        <h3 className="centerme">Loading...</h3>
      ) : (
        <img
          src={image3}
          className="upldedimg"
          alt="uploadedimage"
          style={{ width: "300px" }}
        />
      )}

      <br></br>

      <div className="align">
      <button className="button2" onClick={saveImageToImageElements}>
        SUBMIT
      </button>
</div>
      <br />
    </div>
    <br />
    <br />
    </div>
  );
};
