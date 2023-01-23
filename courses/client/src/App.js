import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/footer';
import Header from './layout/header';
import About from './layout/pages/about';
import Blog from './layout/pages/blog';
import Contact from './layout/pages/contact';
import Courses from './layout/pages/courses';
import Details from './layout/pages/details';
import Home from './layout/pages/home';
import Newcourse from './layout/pages/newcourse';

function App() {
  return (
    <div >
      <Header/>
 <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addcourse' element={<Newcourse />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:_id' element={<Details />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
