import React, { useState,useEffect } from 'react';
import './Home.css';
import Post from './Post';
import axios from 'axios';
//cors : cross origin resource sharing , see when we are calling the api here using the api the data does not comes due to cors policy i.e, since the frontend is working at localhost:3000 and the backend is workking at localhost:8000 so when we request through api it does  not allow to give data to that request so we have to say to the server that when the request comes from localhost:3000 you have to respond to that request
function Home() {
  const [posts,setPosts] = useState();
  const getPosts = async()=>{
    console.log(localStorage.getItem("token"))
    try{
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/getPost`, {
        headers: {
          "authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(response)
      setPosts(response.data.respData);
      console.log(posts)
    }
    catch(error){
      console.log(error);
    }
    
  };



  
useEffect(()=>{
   getPosts();
},[])

  return (
    <div className="home">
      <h1>Here are the answers to your queries</h1>
      <div className="grid-container">
        {posts?.map((post)=>{
          return <Post key={post?._id} post={post}/>
        })}
        </div>
    </div>
  );
}

export default Home;
