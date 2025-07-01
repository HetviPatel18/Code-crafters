import { Routes, Route } from 'react-router-dom';
import Signup from './componants/Signup';
import Login from './componants/Login';
import Getother from './componants/Getother';
import ResponsiveAppBar from './componants/ResponsiveAppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Message from './componants/Message ';
function App() {
  const authdata = useSelector((state) => state.user.setauth);

  return (
    <>     

      <ResponsiveAppBar />

      {authdata && (
        <div className="text-center my-4">
          <h1>Welcome {authdata.username}</h1>
          <h2>ID: {authdata.id}</h2>
          <h2>Gender: {authdata.gender}</h2>
        </div>
      )}
  <div style={{ marginTop: '100px', padding: '16px' }}>
  <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/get" element={<Getother />} />
      </Routes>
      
      </div>
      

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;













// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Signup from './componants/Signup'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Login from './componants/Login'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useSelector } from 'react-redux'
// import Data from './componants/Data'
// import { Link } from 'react-router-dom';
// import Getother from './componants/Getother'
// import ResponsiveAppBar from './componants/ResponsiveAppBar'

// const router=createBrowserRouter([

//     {path:"/", element:<Signup/>},
//          {path:"/login", element:<Login/>},
//          {path:"/signup", element:<Signup/>},
//     {path:"/get", element:<Getother/>},

// ])
// function App() {
// const authdata = useSelector((state) => state.user.setauth);

//   return (
//   <>
//     <ResponsiveAppBar/>
//  {authdata && (
//         <div className="text-center my-4">
//           <h1>Welcome {authdata.username}</h1>
//           <h2>ID: {authdata.id}</h2>
//           <h2>Gender: {authdata.gender}</h2>
//         </div>
//       )}


//   <RouterProvider router={router}/>
//   <ToastContainer position="top-right" autoClose={3000} />
// {/* <Link to="/data"> data </Link> */}

//   </>);
// }


// export default App
// // <div className="min-h-screen bg-base-200 flex items-center justify-center">
//     //   <div className="card w-96 bg-base-100 shadow-xl">
//     //     <div className="card-body text-center">
//     //       <h2 className="text-2xl font-bold">Tailwind + DaisyUI ✅</h2>
//     //       <p>It's working perfectly.</p>
//     //       <button className="btn btn-primary mt-4">Click Me</button>
//     //     </div>
//     //   </div>
//     // </div>