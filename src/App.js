import { useRoutes } from 'react-router-dom';
import routes from './Routes'
import Navbar from './components/Navbar';
import FlashMessageList from './components/flash/FlashMessageList';
import { Routes,Route } from 'react-router-dom';
import Shop from './components/shop/Shop';
import { Fragment, useEffect } from 'react';
import LoginPage from './components/login/LoginPage';

function App() {

  let element = useRoutes(routes)

  return (

     <Fragment>
        <Navbar/>
        <FlashMessageList/>
        {element}
        {/* <Routes>
          <Route path='/shop' element={isAuth===false?<LoginPage/>:<Shop/>}/>
        </Routes> */}
     </Fragment>
    
  );
}
export default App;
