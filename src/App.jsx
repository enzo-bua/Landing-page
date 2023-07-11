import { Clients } from "./components/Clients"
import { Hero } from "./components/Hero"
import { Footer } from "./components/NavBar/Footer"
import { Header } from "./components/NavBar/Header"
import { Reviews } from "./components/Reviews"
import { Services } from "./components/Services"
import { Works } from "./components/Works"


function App() {

  return (
    <>
      <Header /> 
      <Hero /> 
      <Clients /> 
      <Works /> 
      <Reviews /> 
      <Services /> 
      <Footer /> 
    </>
  )
}

export default App
