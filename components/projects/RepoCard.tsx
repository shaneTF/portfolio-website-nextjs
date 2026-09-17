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
        <Typography variant="h6" className={classes.title}>
          {repo.name}
        </Typography>
        <Typography className={classes.description}>
          {repo.description ?? "No description provided."}
        </Typography>
      </CardContent>
    </Card>
  );
}
