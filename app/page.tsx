import SymbolSpawner from "@/components/animations/symbol-spawner";
import classes from "./page.module.css";
import Typewriter from "@/components/animations/typewriter";
import HomepageButtons from "@/components/homepage_buttons/homepage-button";

export default function Home() {
  return (
    <>
      <div className={classes.homeContainer}>
        <header className={classes.headerHome}>
          <p>Hello, I am</p>
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
          <div>
            <p>Software Developer</p>
          </div>

          <div className={classes.buttonRow}>
            <HomepageButtons title="Resume" page="/resume" />
          </div>
        </main>
      </div>
    </>
  );
}
