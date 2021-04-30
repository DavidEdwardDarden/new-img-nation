import React, { useState, useEffect } from 'react';
//import the components we will need
import { BackgrndimgsCard } from "./uploadCard"
import { getAllBackgrndimgs } from "../../data/uploadManager"


export const BackgrndimgsList = () => {
    // The initial state is an empty array
const[backgrndimgs, setbackgrndimg] = useState({
      id: "", 
      collectionId: "", 
      backgrndimg: "",
      imgurl: ""
  })
    //returns all background objects and stores in updated state
    const getBkgrndImgs = () => {
        // After the data comes back from the API, we
        //  use the setBkgrndImg function to update state
        getAllBackgrndimgs()
        .then(bkgrndImgsFromAPI => {
        
          setbackgrndimg(bkgrndImgsFromAPI)
        });
      };

 // got the data from backgrndimages, from the API, on the component's first render
 // got the data from backgrndimages, from the API, on the component's first render
useEffect(() => {
  
    getBkgrndImgs();
  }, []);

console.log(backgrndimgs)

return (
  
    <div className="cardList">
      {backgrndimgs.map(backgrndimg =>
  <BackgrndimgsCard key={backgrndimg.imgurl} backgrndimg={backgrndimg}/>
  )
}</div>
 
)
      
};

