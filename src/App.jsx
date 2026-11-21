import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"


function App() {
  return (
    <>
    <main className="min-h-screen bg-ivory">
      <Navbar/>
      <Home/>
     
    </main>
    <Footer/>
    </>
  )
}

export default App