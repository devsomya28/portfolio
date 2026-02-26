import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import profile from "./pp.jpeg"; // add your image in src folder

function App() {
  const [page, setPage] = useState("landing");

  const nextPage = (next) => setPage(next);

  return (
    <div className="app">

      <AnimatePresence mode="wait">

        {page === "landing" && (
          <motion.div
            key="landing"
            className="full-screen landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>My Portfolio</h1>
            <button onClick={() => nextPage("hero")}>Enter</button>
          </motion.div>
        )}

        {page === "hero" && (
          <motion.div
            key="hero"
            className="full-screen hero"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            <img src={profile} alt="profile" className="profile-img" />
            <h1>Somya Devda</h1>
            <p>First Year CSE (AI & ML) | Python & Django Developer</p>
            <button onClick={() => nextPage("about")}>Next</button>
          </motion.div>
        )}

        {page === "about" && (
          <motion.div
            key="about"
            className="full-screen section"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
          >
            <h2>About Me</h2>
            <p>
             <p>
I am a First Year Computer Science Engineering (AI & ML) student at SOIT, RGPV University, Bhopal. 
I am deeply passionate about Artificial Intelligence, Machine Learning, and Backend Development. 
I have hands-on experience in Python and Django, and I enjoy building real-world web applications. 
Along with backend development, I also explore modern frontend technologies like React to create responsive and interactive user interfaces. 
I am constantly learning new technologies and improving my problem-solving skills. 
My goal is to become a skilled AI engineer and full-stack developer who builds impactful and innovative solutions.
</p>
            </p>
            <button onClick={() => nextPage("skills")}>Next</button>
          </motion.div>
        )}

        {page === "skills" && (
          <motion.div
            key="skills"
            className="full-screen section"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <h2>Skills</h2>
            <div className="skills">
              <span>Python</span>
              <span>Django</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <button onClick={() => nextPage("final")}>Next</button>
          </motion.div>
        )}

        {page === "final" && (
          <motion.div
            key="final"
            className="full-screen final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2>Let’s Connect 🚀</h2>
            <p>Email:devsomya28@gmail.com</p>
            <p>Location: Bhopal, India</p>
            <button onClick={() => nextPage("landing")}>Restart</button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;