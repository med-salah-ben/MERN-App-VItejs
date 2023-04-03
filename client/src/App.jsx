import {Routes , Route , Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from 'semantic-ui-react';

import './App.css'
import HomepageLayout from './pages/Home'
import Contacts from "./pages/Contacts";
import Edit from "./pages/Edit"
import { toggleFalse } from "./JS/Actions/edit";

function App() {
  const dispatch = useDispatch();

  const handleEditFalse = ()=>{
    dispatch(toggleFalse())
  }

  return (
    <div className="App">
      <div className="app-nav">
      <Link to="/"><Button> Home</Button></Link>

      <Link to="/contacts"><Button>Contact List</Button></Link>
      <Link to="/add"><Button onClick={handleEditFalse}>Add</Button></Link>
    </div>
      <Routes>
      <Route path="/" element={<HomepageLayout />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/add" element={<Edit />} />
      <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
