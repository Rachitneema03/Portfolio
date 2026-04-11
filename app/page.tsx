import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { GithubGraph } from "./components/sections/GithubGraph";
import { Contact } from "./components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden pt-8">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GithubGraph />
      <Contact />
      
      <footer className="w-full bg-black text-white p-8 border-t-8 border-white text-center">
        <p className="font-bold uppercase tracking-widest text-lg md:text-xl relative inline-block">
          &copy; {new Date().getFullYear()} Rachit Neema. Stay Brutal.
          <span className="absolute w-full h-2 bg-yellow bottom-2 left-0 -z-10 opacity-70"></span>
        </p>
      </footer>
    </main>
  );
}
