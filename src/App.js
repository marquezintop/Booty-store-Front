import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import { useState } from 'react';
import UserContext from './Contexts/UserContext';

function App() {

  const lsUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(lsUser !== null ? lsUser : {});

  return (
    <BrowserRouter>
    <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
