import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Home from './drafts/home/Home.jsx';
import CreatePost from './drafts/createPost/CreatePost.jsx'
import {Route, Routes} from 'react-router-dom'
import SingleCard from './drafts/singlePost/SingleCard.jsx';
import Signup from './signup/Signup.jsx';
import Login from './login/Login.jsx';
import Contacts from './contacts/Contacts.jsx';
import Profile from './profile/Profile.jsx';


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/createPost" element={<CreatePost/>}/>
      <Route path="/singleCard/:PostId" element={<SingleCard/>}/>
      <Route path="/updatePost/:PostId" element={<CreatePost/>}/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Contacts' element={<Contacts/>} />
      <Route path="/profile/:userId" element={<Profile/>}/>
      </Routes>

    </div>
  )
}

export default App;