import Footer from "./layout/footer";
import Header from "./layout/header";
import Part2 from "./layout/part2";
import Outblue from "./layout/outoftheblue";
import Discover from "./layout/discover";
import { Route, Routes } from "react-router-dom";
import Blog from "./layout/header/blog";
import Page from "./layout/header/page";
import Products from "./layout/header/products";
import Shop from "./layout/header/shop";
import Demo from "./layout/header/demo";
import Glassie from "./layout/header/glassie";
import About from "./layout/header/about";
import Home from "./layout/home";
import Detail from "./layout/detail";


function App() {
  return (
    <div>
      <Header />
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/page" element={<Page />} />
    
      </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
