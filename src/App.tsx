import Backdrop from './components/Backdrop'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import Credentials from './components/Credentials'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Backdrop />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Showcase />
        <Credentials />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
