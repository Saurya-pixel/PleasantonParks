import './css/App.css';
import Detail from './pages/Details';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import KenMercer from './pages/KenMercer';
import AmadorValley from './pages/AmadorValley';
import ValVista from './pages/ValVista';
import Kottinger from './pages/Kottinger';
import Bernal from './pages/Bernal';
import ShadowCliff from './pages/ShadowCliff';
import MissionHills from './pages/MissionHills';
import PleasantonRidge from './pages/PleasantonRidge';
import KottingerVillage from './pages/KottingerVillage';
import Tawny from './pages/Tawny';
import Orloff from './pages/Orloff';
import AlvisoAdobe from './pages/AlvisoAdobe';
import Fairlands from './pages/Fairlands';
import Hansen from './pages/Hansen';
function App() {
  return (
      <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Detail />} />
          <Route path="/park/1" element={<KenMercer />} />
          <Route path="/park/2" element={<AmadorValley />} />
          <Route path="/park/3" element={<ValVista />} />
          <Route path="/park/4" element={<Kottinger />} />
          <Route path="/park/5" element={<Bernal />} />
          <Route path="/park/6" element={<ShadowCliff />} />
          <Route path="/park/7" element={<MissionHills />} />
          <Route path="/park/8" element={<PleasantonRidge />} />
          <Route path="/park/9" element={<KottingerVillage />} />
          <Route path="/park/10" element={<Tawny/>} />
          <Route path="/park/11" element={<Orloff />} />
          <Route path="/park/12" element={<AlvisoAdobe />} />
          <Route path="/park/13" element={<Fairlands />} />
          <Route path="/park/14" element={<Hansen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
