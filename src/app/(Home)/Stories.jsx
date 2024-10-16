import React from "react";
import { InfiniteScroll } from "../Components/InfiniteScroll";
const Stories = () => {
  const items = [
    { name: "Arif", title: "title1" },
    { name: "Sudip", title: "title2" },
    { name: "Arifa", title: "title1" },
    { name: "Sudipa", title: "title2" },
    { name: "Arifz", title: "title1" },
    { name: "Sudipz", title: "title2" },
    { name: "Arif2", title: "title1" },
    { name: "Su dip2", title: "title3" },
  ];
  return (
    <div>
      Stories
      <InfiniteScroll items={items} />
    </div>
  );
};

export default Stories;
