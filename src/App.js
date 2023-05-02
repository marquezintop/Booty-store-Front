import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import { useState } from 'react';
import SignInPage from './pages/SignInPage';
import UserContext from './contexts/UserContexts';
import MeteorsPage from './pages/MeteorsPage';
import MeteoritePage from './pages/MeteoritePage';

function App() {

  const lsUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(lsUser !== null ? lsUser : {});
  const [visible, setVisible] = useState(false);
  const [cart, setCart] = useState([])


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<HomePage visible={visible} setVisible={setVisible}
          cart={cart} setCart={setCart}/>} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/meteors" element={<MeteorsPage />} />
          <Route path="/meteors/:idMeteorite" element={<MeteoritePage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
