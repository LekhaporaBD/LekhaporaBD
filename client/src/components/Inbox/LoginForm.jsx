// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import classes from './Inbox.module.scss';


// const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

// const Modal = () => {
//   // const [username, setUsername] = useState('');
//   // const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const authObject = { 'Project-ID': projectID, 'User-Name': 'username', 'User-Secret': 'password' };

//     try {
//       await axios.get('https://api.chatengine.io/chats', { headers: authObject });

//       localStorage.setItem('username', username);
//       localStorage.setItem('password', password);

//       window.location.reload();
//       setError('');
//     } catch (err) {
//       setError('Oops, incorrect credentials.');
//     }
//   };

//   return (
//     <div className={classes.wrapper}>
//       <div className={classes.form}>
//         <h1 className={classes.title} >Chat Application</h1>
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={classes.input} placeholder="Username" required />
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={classes.input} placeholder="Password" required />
//           <div align="center">
//             <button type="submit" className={classes.button} >
//               <span>Start chatting</span>
//             </button>
//           </div>
//         </form>
//         <h1>{error}</h1>
//       </div>
//     </div>

//   );
// };

// export default Modal;
