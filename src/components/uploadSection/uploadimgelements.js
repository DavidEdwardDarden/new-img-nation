import React, { useState, useEffect } from "react";
import { addImgElements } from "../../data/uploadManager";
import { getCollectionByUserId } from "../../data/collectionManager";
import "./upload.css";

// let collectionId= "";

export const UploadImageElements = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [imgelements, setimgelements] = useState({});
  const [collectionId, setcollectionId] = useState("");
  //collection options are html options... <option></option>
  //each one will represent a collection of the logged in user
  const [collectionOptions, setCollectionOptions] = useState([]);

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

    setImage(file.secure_url);

    setimgelements({
      collectionId: parseInt(collectionId),
      imgurl: file.secure_url,
    });

    setLoading(false);
  };

  //sets the state of the collection id
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
        //map over CollectionOptions in JSX
      }
    );
  }, []);

  const setImageToCollection = (collectionId) => {
    setcollectionId(collectionId.target.value);
  };

  const saveImageToImageElements = () => {
    setimgelements({
      collectionId: parseInt(collectionId),
      imgurl: image,
    });

    //puts the uploaded image in the dataset under imgelements when the user chooses an image file
    const ImageElementAsItWillApearInTheDatabase = addImgElements(imgelements);
    if (ImageElementAsItWillApearInTheDatabase.imgurl === "" || null) {
      return alert("Image unable to upload.");
    }
    alert("Image will appear in PROFILE section under chosen collection.");
  };

  return (
    <div className="centerme">
      <h1 className="steps">STEP 3</h1>
      <hr className="underline"></hr>
      <h1 className="uploadtitle">Upload .PNG Images</h1>
      {/* <h3 className="redme">
        Make sure your image has a checkered background. A checkered background
        indicates transparency. Some images have a fake checkered background...
        so be ware!
      </h3> */}
      <br />
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

      <br></br>

      <div></div>
      <button className="centerme2" onClick={saveImageToImageElements}>
        Submit
      </button>

      <br />
    </div>
  );
};
