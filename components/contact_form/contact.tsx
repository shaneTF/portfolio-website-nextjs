import { Button } from "@mui/material";

export default function ContactButton() {
  return (
    <Button
      variant="contained"
      component="a"
      href="https://mail.google.com/mail/?view=cm&fs=1&to=shanefranklin148@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Email Me
    </Button>
  );
}
