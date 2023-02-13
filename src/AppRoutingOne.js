import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
//import { useLocation, useNavigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/Tasks/TasksPage';
import TaskDetailPage from './pages/Tasks/TaskDetailPage';
import LoginPage from './pages/auth/loginPage';
import LoginFormik from './components/pure/forms/loginFormik';

function AppRoutingOne() {
  const navigate = useNavigate()
  const logged = false;
  //const location = useLocation()
  //const navigate = useNavigate()
  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log('User Logged', logged)
  },[]);
  
  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to='/' >||-HOME-|</Link>
          <Link to='/about' >|-ABOUT-|</Link>
          <Link to='/faqs' >|-FAQs-|</Link>
          <Link to='/no404' >|-No existing Route-|</Link>
          <Link to='/login' >|-Login-||</Link>
        </aside>
        <main>
          <Routes>{/*Antes Switch*/}
            <Route exact path='/' /*Antes component*/ element = { <HomePage /> } />
            <Route path='/login' element = { <LoginFormik/> } />
            <Route path='/faqs' element = { <AboutPage /> } />
            <Route path='/about' element = { <AboutPage /> } />
            <Route path='/profile' element = {logged ? <ProfilePage/> : <LoginPage/> } />
            <Route path='/tasks' element = { <TasksPage /> } />
            <Route path='/tasks/:id' element = { <TaskDetailPage /> } />
            {/* 404 - Page No Found */}
            <Route path='*' element = { <NotFoundPage /> } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutingOne;
