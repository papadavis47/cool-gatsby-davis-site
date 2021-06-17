// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src='../images/Diego-Nica.jpg' alt='My son, Diego, playing in Nicaragua' />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
