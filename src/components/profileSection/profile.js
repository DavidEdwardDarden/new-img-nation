import React, { useState, useEffect } from 'react';
import { getUserById } from '../../data/userManager';
import "./profile.css"
import { useParams } from "react-router-dom"


export const Profile = () => {
  const [user, setUser] = useState({userName: "" });
  
const {userId} = useParams();
  useEffect(() => {
     
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
       
      });
     
  }, [userId]);

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