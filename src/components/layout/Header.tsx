import React from "react";
import { SlLock } from "react-icons/sl";
import { LiaUserPlusSolid } from "react-icons/lia";
import { LiaUser } from "react-icons/lia";
import { SlEarphonesAlt } from "react-icons/sl";

const Header: React.FC = () => (
  <div>
    <div>
      <h1>
        <a href="#">MVSTORY</a>
      </h1>
      <div>
        <div>
          <SlLock />
          <span>로그인</span>
        </div>
        <div>
          <LiaUserPlusSolid />
          <span>회원가입</span>
        </div>
        <div>
          <LiaUser />
          <span>My Movie</span>
        </div>
        <div>
          <SlEarphonesAlt />
          <span>고객센터</span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
