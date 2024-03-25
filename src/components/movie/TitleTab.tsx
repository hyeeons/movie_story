import React from "react";
import { Link } from "react-router-dom";

const TabArr: { name: string }[] = [
  { name: "현재상영작" },
  { name: "상영예정작" },
  { name: "박스오피스" },
];

const TitleTab: React.FC = () => (
  <div className="w-[98%] mx-auto">
    <ul className="h-9 bg-[yellow] flex justify-center items-center">
      {TabArr.map(({ name }, index) => (
        <li key={index} className="w-[33.333%] py-1 text-center border">
          <Link to={""} className="w-full block">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default TitleTab;
