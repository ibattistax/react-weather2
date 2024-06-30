import React from "react";
import "./PageFooter.css";

export default function PageFooter() {
  return (
    <footer>
      Coded by{" "}
      <a href="https://github.com/ibattistax" target="_blank" rel="noreferrer">
        Isabel Battista
      </a>
      , is{" "}
      <a
        href="https://github.com/ibattistax/tempo-app"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://tempo-app-ib.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
      .
    </footer>
  );
}
