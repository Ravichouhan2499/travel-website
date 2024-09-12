// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import React, { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { Auth } from '../../Config'

// export default function SignUp() {

//   const Email = useRef()
//   const Pass = useRef()

//   const Login =(e)=>
//   {
//     e.preventDefault()

//     const email = Email.current.value;
//     const password = Pass.current.value;

//     createUserWithEmailAndPassword(Auth , email ,password)
//     .then((userCredential)=>
//     {
//         console.log(userCredential)
        
//     }).catch((error)=>
//     {
//         console.log(error)
//         alert(error)
//     })
    
//   }

//   return (
//    <div className="login-page">
//   <div className="background-wrapper">  
//     <div className="content-container">
//       <div className="centered-content">
//         <header className="company-header">
//           <h1 className="company-name">
//             <span className="highlight">AVANTIKA</span> VACATIONS
//           </h1>
//           <p className="company-tagline">A Complete Travel Solution</p>
//         </header>
//         <main className="login-section">
//           <div className="login-box">
//             <h2 className="login-title">SignUp</h2>
//             <form className="login-form" onSubmit={Login}>
//               <div className="input-group">
//                 <label  >Email Address</label>
//                 <input ref={Email} type="email" required />
//               </div>
//               <div className="input-group">
//                 <label >Password</label>
//                 <input ref={Pass}  type="password" required />
//               </div>
//               <button type="submit" className="submit-btn">SignUp</button>
//             </form>
            
//             <div  />
//           </div>
//         </main>
//       </div>
//     </div>
//   </div>
// </div>

  
//   )
// }


