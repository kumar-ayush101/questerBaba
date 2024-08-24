import React, { useEffect, useState } from 'react';
import './CreatePost.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const { PostId } = useParams();

  const getCards = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/getSinglePost?PostId=${PostId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const post = response.data.respData;
      setTitle(post?.title);
      setQuestion(post?.question);
      setAnswer(post?.answer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (PostId) {
      getCards();
    }
  }, [PostId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (PostId) {
       
        const response = await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/updateSinglePost`,
          { PostId, title, question, answer },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response?.data?.success) {
          navigate(`/home`);
        }
      } else {
      
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/createPost`,
          { title, question, answer },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response?.data?.success) {
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="create-post-container">
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="topic">Title</label>
          <textarea
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <button type="submit">{PostId ? 'Update Post' : 'Submit Post'}</button>
      </form>
    </div>
  );
};

export default CreatePost;
