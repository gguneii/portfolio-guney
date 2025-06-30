import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* bio section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a front-end developer with a passion for building clean,
          responsive, and user-friendly web interfaces. I have practical
          experience working on real-world projects using HTML, CSS, JavaScript,
          TypeScript, and modern frameworks like React and Next.js. I am also
          proficient in Tailwind CSS, which allows me to create consistent and
          efficient UI designs. My goal is always to deliver intuitive,
          accessible, and high-performance web applications that provide a
          seamless user experience.
        </p>
      </section>

      {/* skills section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>Typescript</li>
              <li>Tailwind, Bootstrap</li>
              <li>HTML5 / CSS3</li>
              <li>Redux, jQuery</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Figma</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* experience section */}

      <section className="mb-16">
        <h2 className="section-title">Experiences</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-primary mb-2">
              AFEA Group | 01/2025 - now
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Building responsive and user-friendly web interfaces.
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-primary mb-2">HPC | 02/2024 - 06/2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                High-Performance Computing(HPC) at Azerbaijan State Oil and
                Industry University
                https://research.asoiu.edu.az/en/interdisciplinary-research/high-performance-computing-hpc/
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education section */}

      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Computer Science
            </h3>
            <p className="text-primary mb-2">ASOIU University | 2020 - 2024</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software development.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
