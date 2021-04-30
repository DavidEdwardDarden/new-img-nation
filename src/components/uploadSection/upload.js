import React, { useState, useEffect } from 'react';
import {BackgrndimgsList} from "./uploadList"
import { addBackgrndimgs } from "../../data/uploadManager"

export const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const[backgrndimgs, setbackgrndimg] = useState({})

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

// console.log(file)

setImage(file.secure_url)
console.log(image)

setbackgrndimg(  {
collectionId: "2", 
imgurl: image})
//--------------------------------------------------

addBackgrndimgs(backgrndimgs)

  // BackgrndimgsList(image)

//--------------------------------------------------
setLoading(false)



  };

  return (
    <div className="Upload">
      <h1>Upload a Background Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}/>

{
    loading?(
        <h3>Loading...</h3>
    ):(
        <img src={image} alt="uploadedimage" style={{width:'300px'}}/>
    )
}

    </div>
  );
};
// {user.img && <img src= {require(`../images/${user.img}`).default} alt="user img"></img>}
// {user.img ? <img src= {require(`../images/${user.img}`).default} alt="user img"></img> : <p>Image not found</p>}

