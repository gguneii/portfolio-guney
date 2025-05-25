import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <Image
            src="/guney.jpg"
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full
                    mb-4 w-32 h-32 object-cover ring-primary"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-6">
          Hi, I'm <span className="text-primary">Guney Suleymanova</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Front-end Developer
        </p>

        <div className="flex items-center justify-center space-x-4 mb-8">
          <Link
            href="https://github.com/gguneii"
            target="_blank"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="www.linkedin.com/in/guney-suleymanova-31265222b"
            target="_blank"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/gguneii"
            target="_blank"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaTwitter />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
