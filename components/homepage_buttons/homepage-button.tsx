"use client";

import { Button } from "@mui/material";
import classes from "./homepageButton.module.css";

export default function HomepageButtons({
  title,
  page,
}: {
  title: string;
  page: string;
}) {
  return (
    <div>
      <Button href={page} variant="outlined" className={classes.hoverButton}>
        {title}
      </Button>
    </div>
  );
}
