import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/footer';
import Header from './layout/header';
import Add from './pages/add';
import Courses from './pages/courses';
import Details from './pages/details';
import Home from './pages/home';
import Programs from './pages/programs';
import Teachers from './pages/teachers';

function App() {
  return (
    <div >
      <Header/>
    <Routes>
        <Route path="/" element={<Home />}/>     
        <Route path="/add" element={<Add />}/>     
        <Route path="/courses" element={<Courses />}/>     
        <Route path="/programs" element={<Programs />}/>     
        <Route path="/teachers" element={<Teachers />}/>     
        <Route path="/:_id" element={<Details />}/>     
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
