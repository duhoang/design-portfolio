import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AiSideProjects from './pages/AiSideProjects';
import UnityXR from './pages/UnityXR';
import UnityARCompanion from './pages/UnityARCompanion';
import Avatour from './pages/Avatour';
import Copilot from './pages/Copilot';
import MapD from './pages/MapD';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ai-side-projects" element={<AiSideProjects />} />
        <Route path="/work/unity-xr" element={<UnityXR />} />
        <Route path="/work/unity-ar-companion" element={<UnityARCompanion />} />
        <Route path="/work/avatour" element={<Avatour />} />
        <Route path="/work/copilot" element={<Copilot />} />
        <Route path="/work/mapd" element={<MapD />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
