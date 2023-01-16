import * as React from 'react';
import './reset.css';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsFillPersonFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoDocumentText } from 'react-icons/io5';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import NoPage from './components/pages/NoPage';

const Home = React.lazy(() => import('./components/pages/Home'));
const Cv = React.lazy(() => import('./components/pages/CV'));


const App = () => {
  return (
    <div className="container mt-5">
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="cv"
          element={
            <React.Suspense fallback={<>...</>}>
              <Cv />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <div className='container mt-5' style={{ textAlign: 'center' }}>
        <NavLink to="/">
          <Button className='button'>
            <BsFillPersonFill className='icon' /> About Me
          </Button>
        </NavLink>
        <NavLink to="/cv">
          <Button className='button'>
            <IoDocumentText className='icon' /> CV
          </Button>
        </NavLink>
        <NavLink to="#">
          <Button className='button' onClick={() => window.open('https://github.com/fakriardian', '_blank')}>
            <BsGithub className='icon' /> Github
          </Button>
        </NavLink>
        <NavLink to="/learn">
          <Button className='button'>
            <AiFillSafetyCertificate className='icon' /> What I've Learn
          </Button>
        </NavLink>
        <NavLink to="#">
          <Button className='button' onClick={() => window.open('https://www.linkedin.com/in/irfan-fakri-ardian-18bab4173/', '_blank')}>
            <BsLinkedin className='icon' /> LinkedIn
          </Button>
        </NavLink>
        <NavLink to="#">
          <Button className='button' onClick={() => window.location = 'mailto:fakriardian@gmail.com'}>
            <MdEmail className='icon' /> Contact Me
          </Button>
        </NavLink>
      </div>
    </div >
  )
}
export default App