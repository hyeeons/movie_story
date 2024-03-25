import React from "react";

const TitleTab: React.FC = () => (
  <div className="w-[98%] mx-auto">
    <h2 className="text-[32px] font-bold">현재상영작</h2>
    <div className="h-9 bg-[yellow] flex justify-center items-center">
      <div className="w-[33.333%] text-center">현재상영작</div>
      <div className="w-[33.333%] text-center">상영예정작</div>
      <div className="w-[33.333%] text-center">박스오피스 순위</div>
    </div>
  </div>
);

export default TitleTab;
