import React, { useState, useEffect } from 'react';
import { addBackgrndimgs } from "../../data/uploadManager"
import './upload.css';
import { addCollections } from "../../data/collectionManager"

// let collectionId= "";

export const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const[backgrndimgs, setbackgrndimg] = useState({})
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

setbackgrndimg(  {
collectionId: collections, 
imgurl: image})


setLoading(false)

  };

  const setImageToCollection = (collectionId) =>{
    setcollection(collectionId.target.value);
  }

  const saveImageToBackgroundImages = () => {
    //puts the uploaded image in the dataset under backgrndimgs when the user chooses an image file
    const backGroundImageAsItWillApearInTheDatabase =addBackgrndimgs(backgrndimgs) 
    if(backGroundImageAsItWillApearInTheDatabase.imgurl === "" || null ){
      return alert("Image unable to upload.")
    }
    }



  return (
    <div className="centerme">
      <h1 className="uploadtitle" >Upload a Background Image</h1>
      
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
onClick={saveImageToBackgroundImages}
>Submit</button>
     
        <br/>
    </div>
    
  );
};