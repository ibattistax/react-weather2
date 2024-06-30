import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="form-input"
          id="form-input"
        />
        <input
          type="submit"
          value="Search"
          className="form-button"
          id="form-button"
        />
      </form>
    </header>
  );
}
