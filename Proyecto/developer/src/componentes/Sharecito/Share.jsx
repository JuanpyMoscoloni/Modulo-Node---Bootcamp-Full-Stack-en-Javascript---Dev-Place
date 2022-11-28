import React from "react";
import "mdb-react-ui-kit";

export const Compartir = () => {
  return (
    <div className="share">
      <span>Share</span>
      <nav>
        <a href="https://twitter.com/Apple" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </nav>
    </div>
  );
};
