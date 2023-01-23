import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/footer';
import Header from './layout/header';
import About from './layout/header/about';
import Adduser from './layout/header/adduser';
import Contact from './layout/header/contact';
import Details from './layout/header/home/details';
import Home from './layout/header/home/indx';
import Practice from './layout/header/practice';
import Test from './layout/header/test';

function App() {
  return (
    <div >
      <Header/>
 <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/:_id" element={<Details />} />
       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
