import React from "react";

function pageNotFound() {
  return (
    <>
      <h1>404 Page Not Found</h1>
      <a href="/">
        <button type="button" className="btn btn-light">
          Home
        </button>
      </a>
    </>
  );
}

export default pageNotFound;
