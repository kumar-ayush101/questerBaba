
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; 

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, { email, password });

//       if (response.data.success) {
//         localStorage.clear();
//         localStorage.removeItem('userId');
//         localStorage.removeItem('token');
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('userId', response.data.userId); 
//         navigate('/home');
//       } else {
//         console.error('Login failed:', response.data.message);
//       }
//     } catch (error) {
//       console.error('Login failed', error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h1 className="login-title">Login</h1>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="login-input"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="login-input"
//             required
//           />
//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, { email, password });

      if (response.data.success) {
        localStorage.clear();
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId); // Store userId in localStorage
        navigate('/home');
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
