import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type Props = {};

const Header: FunctionComponent<Props> = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">Intro to Storybook</a>
            </Link>
            <span className="navbar-burger burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link href="/">
                <a className="navbar-item is-active">Home</a>
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Projects</a>
                <div className="navbar-dropdown">
                  <Link href="/todo">
                    <a className="navbar-item">To-do List</a>
                  </Link>
                  <Link href="sample">
                    <a className="navbar-item">Sample project</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
