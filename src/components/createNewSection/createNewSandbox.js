import React, { useState, useEffect } from "react";
import { addCollectionImg } from "../../data/uploadManager";
import "./createNew.css";

export const CreateNew = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [collection, setCollection] = useState({});
  const [collections, setCollections] = useState([]);

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

    setCollection({
      id: "",
      userId: sessionStorage.getItem("nation_user"),
      img: image,
      collectionTitle: "New Collection",
    });

    setLoading(false);
  };

  const handleInputChange = (event) => {
    //Spread Syntax takes in an iterable (e.g an array) and expands it into individual elements.
    const newCollection = { ...collection };
    newCollection[event.target.id] = event.target.value;
    setCollection(newCollection);
  };

  //Example code:
  //   const handleInputChange = (event) => {
  //     const newUser = { ...registerUser }
  //     newUser[event.target.id] = event.target.value
  //     setRegisterUser(newUser)
  // }

  const saveImageToCollectionImages = () => {
    //puts the uploaded image in the dataset under collections when the user chooses an image file
    addCollectionImg(collection);

    const setImageToACollectionId = () => {
      //GOAL: SET IMAGE COLLECTION ID to the number of collections the user has PLUS 1
      //GOAL (continued):If the user has zero collections... the plus one should make the
      //GOAL (continued):collection id be 1
      setCollections(collections.push(collection));
      let arrayLengthPlusOne = collections.length++;
      let collectionIdNum = arrayLengthPlusOne + parseInt(collection.id);
      setCollection(collectionIdNum);
    };

    setImageToACollectionId();

    //puts the uploaded image in the dataset under collections when the user chooses an image file
    addCollectionImg(collection);
  };

  const someFunction = () => {
    return console.loh("hyellow");
  };

  return (
    <div className="centerme">
      <form className="formuplogin" onSubmit={someFunction}>
        <h1 className="gry">Create a TITLE for your Masterpiece.</h1>
        <fieldset className="designme">
          <label htmlFor="collectionTitle"> Title: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Title Here"
            required
            autoFocus
            value={collection.collectionTitle}
            onChange={handleInputChange}
          />
        </fieldset>
      </form>

      <h1 className="uploadtitle">Upload a New Composite Image</h1>
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

      <label className="moveright" htmlFor="collectionNumber">
        Choose a collection to save your image to:{" "}
      </label>

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
      <br />

      <button className="centerme2" onClick={saveImageToCollectionImages}>
        Submit
      </button>
      <br />
      <br />
    </div>
  );
};
