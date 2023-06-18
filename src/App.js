// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
