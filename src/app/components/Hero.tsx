"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animation";
const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-4"
        >
          <Image
            src="/guney.jpg"
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full
                    mb-4 w-32 h-32 object-cover ring-primary"
          />
        </motion.div>
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-black mb-6"
        >
          Hi, I&apos;m <span className="text-primary">Guney Suleymanova</span>
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Front-end Developer
        </motion.p>

        <div className="flex items-center justify-center space-x-4 mb-8">
          <Link
            href="https://github.com/gguneii"
            target="_blank"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/guney-suleymanova-31265222b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin />
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
