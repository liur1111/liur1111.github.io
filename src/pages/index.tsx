import * as React from "react";
import { Link } from "gatsby";

import "../styles/index.css";

const IndexPage = () => {
  return (
    <body>
      <header className="main header">
        <div className="grid-item header-logo">RACHEL LIU</div>
        <nav className="grid-item navbar">
          <div className="navbar-group">
            <Link to="/">works</Link>
            <Link to="/about">about</Link>
            <div>resume</div>
          </div>
        </nav>
      </header>
      <main>
        <div className="welcome">
          WELCOME TO THE ROACH MIND WELCOME TO THE ROACH MIND WELCOME TO THE
          ROACH MIND WELCOME TO THE ROACH MIND WELCOME TO THE ROACH MIND WELCOME
          TO THE ROACH MIND WELCOME TO THE ROACH MIND WELCOME TO THE ROACH MIND
        </div>
        <div className="works">works</div>
        <div className="other">other</div>
      </main>
      <footer className="main footer">footer</footer>
    </body>
  );
};

export default IndexPage;
