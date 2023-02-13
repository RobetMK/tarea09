import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import Button from '@mui/material/Button';
/* IMPORTAMOS LAS PAGINAS */
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/loginPage';
import NotFoundPage from './pages/404/NotFoundPage';
import DashBoard from './pages/dashboard/DashBoard';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/Tasks/TasksPage';
import TaskDetailPage from './pages/Tasks/TaskDetailPage';
import LoginFormik from './components/pure/forms/loginFormik';


function AppRoutingFinal() {
  let initialVal = {
    email:'x@z',
    password:'none'
  }
  const [logged, setLogged] = useState(initialVal);
  //const navigate = useNavigate()
  useEffect(() => {
    let credentials = JSON.parse( localStorage.getItem('credentialDos') )
    setLogged(credentials)
    console.log('User :', logged)
  },[]);
  return (
  <Router>
    <div>
      <aside>
        <Link to='/' >||-HOME-|</Link>
        <Link to='/about' >|-ABOUT-|</Link>
        <Link to='/faqs' >|-FAQs-|</Link>
        <Link to='/dashboard' >|-Dashboard-|</Link>
        <Link to='/no404' >|-No existing Route-|</Link>
        <Link to='/login' >|-Login-||</Link>
      </aside>
      <main>
          <Routes>
            <Route exact path='/' element = { <HomePage/>} />
            <Route path='/login' element = {<LoginPage/>} />
            <Route exact path='/dashboard' element = { logged ? <DashBoard /> : <LoginPage />} />
            <Route path='/login2' element = { <LoginFormik/> } />
            <Route path='/faqs' element = { <AboutPage /> } />
            <Route path='/about' element = { <AboutPage /> } />
            <Route path='/profile' element = {logged ? <ProfilePage/> : <LoginPage/> } />
            <Route path='/tasks' element = { <TasksPage /> } />
            <Route path='/tasks/:id' element = { <TaskDetailPage /> } />
            <Route path='*' element = { <NotFoundPage /> } />
          </Routes>
      </main>
    </div>
  </Router>
  );
}

export default AppRoutingFinal;
