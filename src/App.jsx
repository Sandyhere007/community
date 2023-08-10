import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import UserRegister from './pages/UserRegister.jsx';
import AdminRegister from './pages/AdminRegister.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import "./styles/app.scss"
import Aboutus from './pages/AboutUs.jsx';
import Challenges from './pages/Challenges.jsx';
import { Toaster } from 'react-hot-toast';
import { Context, server } from './index.js';
import axios from 'axios';
import SdeChallenge1 from './components/SdeChallenge1.jsx';
import SdeChallengeAdd1 from './components/admin/SdeChallengeAdd1.jsx';
import Community from './pages/Community.jsx';

const App = () => {
const{setUser , setIsAuthenticated } = useContext(Context);
useEffect(() =>{
  axios
    .get(`${server}/user/profile`,{
      withCredentials: true,
    })
    .then((res) =>{
      setUser(res.data.user) 
      setIsAuthenticated(true);
    })
    .catch((err) => {
      setUser({});
      setIsAuthenticated(false)
    });
} , [])
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/challenge' element={<Challenges />}></Route>
        <Route path='/aboutuspage' element={<Aboutus />}></Route>
        <Route path='/community' element={<Community />}></Route>
        <Route path='/userlogin' element={<UserLogin />}></Route>
        <Route path='/userregister' element={<UserRegister />}></Route>
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/adminregister' element={<AdminRegister />}></Route>
        <Route path='/sdechallenge1' element={<SdeChallenge1/>}></Route>
        <Route path='/sdechallengeadd1' element={<SdeChallengeAdd1 />}></Route> 

        

      </Routes>
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App