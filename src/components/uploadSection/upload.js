import React, { useState, useEffect } from 'react';
import { addBackgrndimgs } from "../../data/uploadManager"
import './upload.css';

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
// console.log(image)

setbackgrndimg(  {
collectionId: "1", 
imgurl: image})
//--------------------------------------------------
//puts the uploaded image in the dataset under backgrndimgs
const backGroundImageAsItWillApearInTheDatabase =addBackgrndimgs(backgrndimgs) 
if(backGroundImageAsItWillApearInTheDatabase.imgurl === "" || null ){
  return alert("Image unable to upload.")
}
//--------------------------------------------------

// const uploadToCollection = document.querySelector("#collectionNumber")
// uploadToCollection.addEventListener("change", (event) => {
// 	if(event.target.id === "collectionNumber") {
// 		const numberValue = (event.target.value);
// 		filterCollections(numberValue);
// 	}
// })

setLoading(false)

  };

  return (
    <div className="centerme">
      <h1 className="uploadtitle" >Upload an Image</h1>
      <div className="redme" >Selected images are automatically saved to your profile. </div>
      <input className="centerme"
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}/>
{
    loading?(
        <h3 className="centerme">Loading...</h3>
    ):(
        <img src={image} className="upldedimg" alt="uploadedimage" style={{width:'300px'}}/>
    )
}
<br></br>
<br></br>
<br></br>
    </div>
  );
};
// {user.img && <img src= {require(`../images/${user.img}`).default} alt="user img"></img>}
// {user.img ? <img src= {require(`../images/${user.img}`).default} alt="user img"></img> : <p>Image not found</p>}



{/* <button onclick="addBackgrndimgs(backgrndimgs)" className="btn-6">Save to Profile Page</button> */}

{/* <div className="redme" >Selected images are automatically saved to your profile. </div> */}

{/* <label for="collectionNumber">Choose a collection to save your image to: </label> 
<select name="collectionNumber" id="collectionNumber">
 <option value="1">1</option>
 <option value="2">2</option>
 <option value="3">3</option>
 <option value="4">4</option>
</select> */}