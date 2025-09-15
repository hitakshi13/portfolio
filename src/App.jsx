import Hero from "./sections/Hero.jsx";
import ShowCase from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import Education from "./sections/Education.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
const App = () => {
  return (
<>
  <NavBar />
    <Hero/>
  <ShowCase />
<Education />
  <TechStack />
  <Contact />

</>
  )
}

export default App
