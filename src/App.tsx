import Backdrop from './components/Backdrop'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Experience from './components/Experience'
import Memberships from './components/Memberships'
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
        <Services />
        <Experience />
        <Credentials />
        <Memberships />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
