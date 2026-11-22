import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import PracticeAreas from "./pages/PracticeAreas"
import Attorneys from "./pages/Attorneys"
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-ivory">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App