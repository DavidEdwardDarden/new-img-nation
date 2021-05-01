import React, { useState, useEffect } from 'react';
import { getUserById } from '../../data/userManager';
import { Link, useHistory } from "react-router-dom";
import "./profile.css"
import { useParams } from "react-router-dom"

export const Profile = () => {
  const [user, setUser] = useState({userName: "" });
  const [isLoading, setIsLoading] = useState(true);
  
const {userId} = useParams();
  useEffect(() => {
     //getUserById(id) from UserManager and hang on to the data; put it into state
    console.log("useEffect", userId)
    const bob=parseInt(sessionStorage.getItem("nation_user"))
   // const bob=sessionStorage.getItem("nation_user")
    // console.log(bob)
    getUserById(bob)
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
      });
  }, [userId]);


  return (
   <div>
     <h2 className="nationmember"> Nation Member Identification:</h2>
     <h1 className="usernamelook">{user.userName}</h1>
     {user.img ? <img src= {require(`../images/${user.img}`).default} className="iconborder" alt="user img"></img> : <p className="centermessage">Image not found</p>}
     <br/>
     <br/>
   </div>
  )
    
}
//another way to make the image work
// {user.img && <img src= {require(`../images/${user.img}`).default} alt="user img"></img>}
// {user.img ? <img src= {require(`../images/${user.img}`).default} alt="user img"></img> : <p>Image not found</p>}