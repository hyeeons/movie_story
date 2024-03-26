import React from "react";
import Poster from "./Poster";
import Button from "./MvTit";
import MvTit from "./MvTit";

const MovieCard: React.FC = () => (
  <>
    <div className="w-[13.0625rem]">
      <Poster /> <MvTit />
    </div>
  </>
);

export default MovieCard;
