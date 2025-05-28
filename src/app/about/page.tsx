import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* bio section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m bla bla
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
                  <li>Tailwind</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>

               <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                <FaCode className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
                <ul className="text-secondary space-y-2">
                  <li>Git / GitHub</li>
                  <li>Docker</li>
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
              <p className="text-primary mb-2">Company Naame | Start Date - End Date</p>
              <ul className="text-secondary list-disc list-inside space-y-2">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aspernatur?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aspernatur?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aspernatur?</li>
              </ul>
            </div>


             <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
              <p className="text-primary mb-2">Company Naame | Start Date - End Date</p>
              <ul className="text-secondary list-disc list-inside space-y-2">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aspernatur?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aspernatur?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aspernatur?</li>
              </ul>
            </div>

          </div>
      </section>

      {/* Education section */}

      <section className="mb-16">
          <h2 className="section-title">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Science</h3>
              <p className="text-primary mb-2">ASOIU University | 2020 - 2024</p>
              <p className="text-secondary">Graduated with honors. Focused on software development. </p>
            </div>
          </div>
      </section>

    </div>
  );
};

export default About;
