import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from 'react';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* Content for the homepage */}
      <p>Welcome to our bus booking service!</p>
    </div>
  );
};

export default HomePage;
