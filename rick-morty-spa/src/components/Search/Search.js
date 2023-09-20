import React from "react";
import styles from "./Search.module.css";

const Search = ({ setSearch }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mt-3 mb-3 ">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search characters"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary btn-sm fs-6"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
