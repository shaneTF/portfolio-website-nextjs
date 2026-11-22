import SymbolSpawner from "@/components/animations/symbol-spawner";
import classes from "./page.module.css";
import Typewriter from "@/components/animations/typewriter";
import HomepageButtons from "@/components/homepage_buttons/homepage-button";

export default function Home() {
  return (
    <>
      <div className={classes.homeContainer}>
        <header className={classes.headerHome}>
          <h2 className={classes.introText}>Hello, I am</h2>
        </header>
        <main className={classes.mainHome}>
          <div className={classes.symbolContainer}>
            <div className={classes.nameField}>
              <span className={classes.namePlaceholder}>Shane Franklin</span>
              <div className={classes.typewriterOverlay}>
                <Typewriter text="Shane Franklin" speed={140} />
              </div>
            </div>

            <SymbolSpawner />
          </div>
          <h2 className={classes.roleText}>Software Developer</h2>

          <div className={classes.buttonRow}>
            <HomepageButtons title="Resume" page="/resume" />
            <HomepageButtons title="Projects" page="/github_projects" />
          </div>
        </main>
      </div>
    </>
  );
}
