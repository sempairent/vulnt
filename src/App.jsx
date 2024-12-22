import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Media from './paginas/Media';
import Baja from './paginas/Baja';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/baja" element={<Baja />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
