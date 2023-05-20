import './App.css';
import "./Responsive/Responsive.css"
import Header from './Header/Header';
import Home from './Home/Home';
import About from './Home/Contact/About/About';
import Contact from './Home/Contact/Contact';
import Galry from './Home/Contact/About/Galry/Galry';
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Footer from './Footer/Footer';
import ShowContent from "./show_content_books/ShowContent"


function App() {
  return (
    <BrowserRouter basename='/MyWebLiberary'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/MyWebLiberary/' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path='/galry' element ={<Galry/>} />
        <Route path='/showContent' element ={<ShowContent/>} />
      </Routes>
      <Footer/>
    </Router>
    </BrowserRouter>
  );
}
export default App;
