
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import {Route, Routes} from 'react-router-dom';
import SingleUser from './components/SingleUser';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users">
      <Route index element={<Users />} />
      <Route path=":id" element={<SingleUser />} />
     </Route>
      
   
</Routes>
    </div>
  );
}

export default App;
