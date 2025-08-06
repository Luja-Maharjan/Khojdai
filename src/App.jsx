import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import PostItem from "./pages/PostItem";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lostitem" element={<LostItems />} />
        <Route path="/founditem" element={<FoundItems />} />
        <Route path="/postitem" element={<PostItem />} />
      </Routes>
    </BrowserRouter>
  );
}
