/*
 * Later desires, Just get the page working for now.
 * Simple video game like loading screen on loading
 * Simple pixel character will run down the edge of page when scrolling
 * -----------------------------------------------------------------------
 * Page should display a simple description, similar to the one on Resume.
 * Nav links should be available on all pages, add to layout page.
 *
 */

import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.headerContainer}>
          <header className={classes.headerHome}>
            <p>Hello, I am</p>
          </header>
        </div>
        <div className={classes.mainContainer}>
          <main className={classes.mainHome}>
            <strong>
              <h1>Shane Franklin</h1>
            </strong>
            <p>Full Stack Web Developer</p>
            <div>
              <p>About me button</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
