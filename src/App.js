import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserContext from "./contexts/UserContexts";
import { useState } from 'react';

function App() {

  const lsUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(lsUser !== null ? lsUser : {});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
