import './App.css';
import Header from './layout/header';
// import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Blog from './pages/blog';
import Detail from './pages/detail';
import Error  from './pages/eror'
function App() {
  return (
    <div> 
     <Header/>
    <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/blog" element={< Blog/>} />
        <Route path="/:id" element={< Detail/>} />
        <Route path="/*" element={<Error />} />

        </Routes>
  
    </div>
  
  );
}

export default App;
