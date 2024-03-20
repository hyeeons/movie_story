import React from "react";
import { SlLock } from "react-icons/sl";
import { LiaUserPlusSolid } from "react-icons/lia";
import { LiaUser } from "react-icons/lia";
import { SlEarphonesAlt } from "react-icons/sl";

const MenuArr = [
  { icon: <SlLock />, text: "로그인" },
  { icon: <LiaUserPlusSolid />, text: "회원가입" },
  { icon: <LiaUser />, text: "My Movie" },
  { icon: <SlEarphonesAlt />, text: "고객센터" },
];

const Header: React.FC = () => (
  <div className="flex flex-col justify-center h-[144px] gap-5">
    <div className="flex items-center justify-between ">
      <h1>
        <a href="#">MVSTORY</a>
      </h1>
      <div className="flex gap-5">
        {MenuArr.map(({ icon, text }, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className="text-3xl">{icon}</div>
            <span className="text-sm">{text}</span>
          </div>
        ))}
      </div>
    </div>
    <ul className="flex gap-5">
      <li>
        <a href="#">현재상영작</a>
      </li>
      <li>
        <a href="#">상영예정작</a>
      </li>
    </ul>
  </div>
);

export default Header;
