import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="relative bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-cyan-500/20">
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }} />
          <div className="absolute -bottom-[20%] -left-[15%] w-[70%] h-[70%] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }} />
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        </div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main className="relative">
                <About />
                <Skills />
                <WorkExperience />
                <Portfolio />
                <Contact />
                <footer className="relative border-t border-slate-200 py-8 text-center">
                  <p className="text-sm text-slate-500 font-mono">© 2026 Agung Priyanto — Crafted with glass & code</p>
                </footer>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
