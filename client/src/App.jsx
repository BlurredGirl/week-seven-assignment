import { Routes, Route } from "react-router-dom";
import GamesForm from "./GamesForm";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./Home";
import PostsPage from "./Posts";

export default function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/gamesform" element={<GamesForm />} ></Route>
        <Route path="/posts" element={<PostsPage />} ></Route>
      </Routes>
 
      <iframe
        src="https://open.spotify.com/embed/track/6AhPqnecwhUB6MsLM2fOaY?utm_source=generator"
        width="100%"
        height="152px"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <Footer />
    </div>
  );
}
