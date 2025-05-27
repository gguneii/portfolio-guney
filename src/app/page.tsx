import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Blogs />
      <NewsLetter />
    </>
  );
}
