import classes from "./lavalamp.module.css";

export default function LavaLampBackground() {
  return (
    <div className={classes["lava-bg"]}>
      <div className={classes["blob"] + " " + classes["blob-1"]} />
      <div className={classes["blob"] + " " + classes["blob-2"]} />
      <div className={classes["blob"] + " " + classes["blob-3"]} />
      <div className={classes["blob"] + " " + classes["blob-4"]} />
      <div className={classes["blob"] + " " + classes["blob-5"]} />
      <div className={classes["blob"] + " " + classes["blob-6"]} />
    </div>
  );
}
