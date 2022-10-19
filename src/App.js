import { Route, Routes } from 'react-router-dom';
import './App.css';
import HompePage from './pages/homepage/hompepage.component';

const HatsPage = () => (
  <h1>hellloooooo</h1>

)


function App() {
  return (
    <Routes>
       <Route path='/' component={<HompePage />} ></Route>
      <Route path='/hats' component={<HatsPage />} ></Route>
    </Routes>
  );
}

export default App;
