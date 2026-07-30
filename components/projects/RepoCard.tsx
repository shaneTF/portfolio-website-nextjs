"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import classes from "./projects.module.css";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <CardActions>
          <Button href={repo.html_url} className={classes.link}>
            {repo.name}
          </Button>
        </CardActions>
        <Typography className={classes.description}>
          {repo.description ?? "No description provided."}
        </Typography>
      </CardContent>
    </Card>
  );
}
