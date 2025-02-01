import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import User from './components/User';
import UsersData from './components/UsersData';
import UserLogin from './components/UserLogin';
import LandingPage from './components/LandingPage';
import UserProfile from './components/UserProfile';
import UserForm from './components/UserForm';
import Language from './pages/Language';
import UserEdit from './components/UserEdit';


const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Nested routes render inside <Outlet /> */}
            {/* <Route index element={<Home />} /> */}
            <Route path="user" element={<User />} />
            <Route path="userlist" element={<UsersData />} />
            <Route path="userlogin" element={<UserLogin />} />
            <Route path="landingpage" element={<LandingPage />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="userform" element={<UserForm />} />
            <Route path="/useredit/:id" element={<UserEdit />} />
            <Route path="language" element={<Language />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
