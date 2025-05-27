import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:boder-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-8">
            <Link href="/" className="text-xl font-bold text-primary">
              Devfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2"> © {new Date().getFullYear()} DevFolio. All rights reserved. </p>
          </div>

          
        <div className="flex items-center space-x-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
