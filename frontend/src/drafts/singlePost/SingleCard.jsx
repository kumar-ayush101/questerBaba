import React, { useEffect, useState } from "react";
import './SingleCard.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleCard = () => {
  const { PostId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/getSinglePost?PostId=${PostId}`,{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setPost(response?.data?.respData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async () => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/deleteSinglePost?PostId=${PostId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      
      if (response?.data?.success) {
        navigate('/home');
      } else {
        console.log("Failed to delete the post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-card">
      <h2>{post?.title}</h2>
      <h4>{post?.question}</h4>
      <p>{post?.answer}</p>
      <button onClick={deletePost}>Delete</button>
      <button onClick={() => navigate(`/updatePost/${PostId}`)}>Edit</button>
    </div>
  );
};

export default SingleCard;
