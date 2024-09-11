import React from "react";
import Headline from "../Headlines/Headline";
import "./HeadlineList.css";

function HeadlineList({ headlines }) {
  return (
    <>
      <h2>Top Headlines</h2>
      <div className="headline-list">
        {headlines.map((headline, index) => (
          <Headline key={index} article={headline} />
        ))}
      </div>
    </>
  );
}

export default HeadlineList;
