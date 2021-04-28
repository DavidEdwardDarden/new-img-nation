import React, { useState } from 'react';

export const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

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

console.log(file)

setImage(file.secure_url)
setLoading(false)

  };

  return (
    <div className="Upload">
      <h1>Upload Image</h1>
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
