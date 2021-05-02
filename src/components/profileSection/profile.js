import React, { useState, useEffect } from 'react';
import { getUserById } from '../../data/userManager';
import { Link, useHistory } from "react-router-dom";
import "./profile.css"
import { useParams } from "react-router-dom"
import { getCollectionByUserId, getAllCollections } from "../../data/collectionManager"

export const Profile = () => {
  const [user, setUser] = useState({userName: "" });
  const [isLoading, setIsLoading] = useState(true);
  
const {userId} = useParams();
  useEffect(() => {
     //getUserById(id) from UserManager and hang on to the data; put it into state
    console.log("useEffect", userId)
    const usersId=parseInt(sessionStorage.getItem("nation_user"))
    
    getUserById(usersId)
      .then(user => {
        setUser({
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          id: user.id,
          img: user.img
        });
        setIsLoading(false);
        // console.log(getCollectionByUserId(usersId))
       
      });
     
  }, [userId]);

  // console.log(user.collection)
// console.log(getCollectionByUserId(userId))
// console.log(getCollectionByUserId(usersId))
// getCollectionByUserId(user.id)
// console.log(getAllCollections(users.d))



  return (
   <div>
     <h2 className="nationmember"> Nation Member Identification:</h2>
     <h1 className="usernamelook">"{user.userName}"</h1>
     {user.img ? <img src= {require(`../images/${user.img}`).default} className="iconborder" alt="user img"></img> : <p className="centermessage">Image not found</p>}
     <br/>
     <br/>
     <br/>
     <br/>
   </div>
  )
    
}
//another way to make the image work
// {user.img && <img src= {require(`../images/${user.img}`).default} alt="user img"></img>}
// {user.img ? <img src= {require(`../images/${user.img}`).default} alt="user img"></img> : <p>Image not found</p>}