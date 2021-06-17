// Step 1: Import your component
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle='About Me'>
        <p>I am the father of 3 kids and a husband to a lovely woman 🏊‍♂️</p>
      </Layout>
    </main>
  );
};

// Step 3: Export your component
export default AboutPage;
