import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Landing from './pages/Landing'
import SanctuaryHub from './pages/SanctuaryHub'
import MirrorOfTruth from './pages/MirrorOfTruth'
import ListeningGarden from './pages/ListeningGarden'
import MemoryLane from './pages/MemoryLane'
import ApologyBloom from './pages/ApologyBloom'
import PromiseStars from './pages/PromiseStars'
import LoveLetters from './pages/LoveLetters'
import GiftChamber from './pages/GiftChamber'
import HealingCanvas from './pages/HealingCanvas'
import NewYear2026 from './pages/NewYear2026'
import Gallery from './pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="sanctuary" element={<SanctuaryHub />} />
          <Route path="mirror-of-truth" element={<MirrorOfTruth />} />
          <Route path="listening-garden" element={<ListeningGarden />} />
          <Route path="memory-lane" element={<MemoryLane />} />
          <Route path="apology-bloom" element={<ApologyBloom />} />
          <Route path="promise-stars" element={<PromiseStars />} />
          <Route path="love-letters" element={<LoveLetters />} />
          <Route path="gift-chamber" element={<GiftChamber />} />
          <Route path="healing-canvas" element={<HealingCanvas />} />
          <Route path="new-year-2026" element={<NewYear2026 />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
