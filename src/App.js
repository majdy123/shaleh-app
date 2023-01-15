import * as React from 'react';
import { Route ,Routes} from 'react-router-dom';
import Signin from './component/signin/Signin';
import Home from './component/home/Home';
import NotFound from './component/notfound/NotFound'
import Admin from './component/admin/Admin'
import View from './component/view/View';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />}/>
      </Route>
      <Route path="/SignIn" element = {<Signin />} />
      <Route path='/admin/:id' element = {<Admin/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='*' element = {<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
