import React, { useState } from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Post({ post }) {
  const [likes, setLikes] = useState(post?.likes || 0);
  const [dislikes, setDislikes] = useState(post?.dislikes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const navigate = useNavigate();

  const handleLike = async (e) => {
    e.stopPropagation();
    if (!liked) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/like/${post._id}`);
        setLikes(response.data.likes);
        setLiked(true);
        if (disliked) {
          setDislikes(dislikes - 1);
          setDisliked(false);
        }
      } catch (error) {
        console.error('Error liking the post:', error);
      }
    }
  };

  const handleDislike = async (e) => {
    e.stopPropagation();
    if (!disliked) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/dislike/${post._id}`);
        setDislikes(response.data.dislikes);
        setDisliked(true);
        if (liked) {
          setLikes(likes - 1);
          setLiked(false);
        }
      } catch (error) {
        console.error('Error disliking the post:', error);
      }
    }
  };

  return (
    <div onClick={() => navigate(`/singleCard/${post?._id}`)} className="post-card">
      <h2 className="post-title">{post?.title}</h2>
      <h3 className="post-question">{post?.question}</h3>
      <p className="post-answer">{post?.answer}</p>
      <div className="post-actions">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={`vote-icon ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        />
        <span>{likes}</span>
        <FontAwesomeIcon
          icon={faThumbsDown}
          className={`vote-icon ${disliked ? 'disliked' : ''}`}
          onClick={handleDislike}
        />
        <span>{dislikes}</span>
      </div>
    </div>
  );
}

export default Post;
