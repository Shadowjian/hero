import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import HeroRegister from "./layout/pages/HeroRegister";
import Home from "./layout/pages/Home";
import SearchResult from "./layout/pages/SearchResult";
import UserProfile from "./layout/pages/UserProfile";

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="suitup" element={<HeroRegister />}/>
        <Route path="profile" element={<UserProfile />}/>
        <Route path="searchresult" element={<SearchResult />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
