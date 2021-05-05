import React, { useState } from 'react';
import { addImgElements } from "../../data/uploadManager"
import './upload.css';

// let collectionId= "";

export const UploadImageElements = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const[imgelements, setimgelements] = useState({})
  const[collections, setcollection] = useState({})

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
        body: data
      }
    );

const file = await res.json();

setImage(file.secure_url)

setimgelements(  {
collectionId: collections, 
imgurl: image})


setLoading(false)

  };

  const setImageToCollection = (collectionId) =>{
    setcollection(collectionId.target.value);
  }

  const saveImageToImageElements = () => {
    //puts the uploaded image in the dataset under imgelements when the user chooses an image file
    const backGroundImageAsItWillApearInTheDatabase =addImgElements(imgelements) 
    if(backGroundImageAsItWillApearInTheDatabase.imgurl === "" || null ){
      return alert("Image unable to upload.")
    }
    }



  return (
    <div className="centerme">
      <h1 className="uploadtitle" >Upload a .PNG Image</h1>
      <h3 className="redme">Make sure your image has a checkered background. 
      A checkered background indicates transparency. Some images have a fake checkered 
      background... so be ware!</h3>
      
      <label className="moveright" htmlFor="collectionNumber">Choose a collection to save your image to: </label> 

<select 
onChange={setImageToCollection} 
name="collectionNumber" id="collectionNumber">
 <option value="1">1</option>
 <option value="2">2</option>
 <option value="3">3</option>
 <option value="4">4</option>
</select>

<br/>

<input className="centerme"
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}/>

<br/>

{
    loading?(
        <h3 className="centerme">Loading...</h3>
    ):(
        <img src={image} className="upldedimg" alt="uploadedimage" style={{width:'300px'}}/>
    
    )
}
<br></br>

<div>

</div>
<button className="centerme2"
onClick={saveImageToImageElements}
>Submit</button>
     
        <br/>
    </div>
    
  );
};