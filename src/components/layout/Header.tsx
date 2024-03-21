import React from "react";
import { SlLock } from "react-icons/sl";
import { LiaUserPlusSolid } from "react-icons/lia";
import { LiaUser } from "react-icons/lia";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuArr = [
  { icon: <SlLock />, text: "로그인" },
  { icon: <LiaUserPlusSolid />, text: "회원가입" },
  { icon: <LiaUser />, text: "My Movie" },
  { icon: <SlEarphonesAlt />, text: "고객센터" },
];

const Header: React.FC = () => (
  <div className="flex flex-col justify-center h-[144px] gap-5 bg-[pink]">
    <div className="flex items-center justify-between ">
      <h1>
        <Link to="#">MVSTORY</Link>
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
    <div className="flex justify-between px-[5px] items-center">
      <ul className="flex gap-5">
        <li>
          <Link to="#">현재상영작</Link>
        </li>
        <li>
          <Link to="#">상영예정작</Link>
        </li>
      </ul>
      <div className="relative w-[26%]">
        <form action="/search" method="GET">
          <input
            type="text"
            placeholder="영화제목을 입력해보세요"
            className="w-full h-[37px] indent-[10px] focus:outline-none"
          />
          <button type="submit" className="absolute top-[25%] right-[7px]">
            <FaSearch />
            <p className="indent-[-9999px]">검색</p>
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Header;
