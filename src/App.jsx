import styles from "./App.module.css";
import {Navbar} from "./Navbar/Navbar";
import Hero from "./Navbar/Hero/Hero";
import About from "./Navbar/About/About";
import Experience from "./Navbar/Experience/Experience";
import { Projects } from "./Navbar/Projects/Projects";
import {Contact} from "./Navbar/Contact/Contact"

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Contact/>
      
    </div>
  );
};

export default App;
