import * as React from 'react';
import Button from '@mui/material/Button'; 
import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Footer from './component/footer/Footer';
import { Route ,Routes} from 'react-router-dom';
import Signin from './component/signin/Signin';
import Home from './component/home/Home';
import NotFound from './component/notfound/NotFound'
import Admin from './component/admin/Admin'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />}/>
      </Route>
      <Route path="/SignIn" element = {<Signin />} />
      <Route path='/admin/:id' element = {<Admin/>}/>
      <Route path='*' element = {<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
