import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IceCreamLanding from './components/IceCreamLanding';
import Eventos from './components/Eventos';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IceCreamLanding />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;