import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div id="searchBar">
        <form id="search-bar">
          <input
            type="search"
            placeholder="Type City..."
            class="form"
            id="form"
            autocomplete="off"
          />
          <button id="searchBtn" type="submit" name="submit" value="Search">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
