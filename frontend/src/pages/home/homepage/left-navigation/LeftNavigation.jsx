import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import {
  HomeLeftContainer,
  HomeLeftFixedContainer,
  HomeProfileContainer,
} from "../../ui/HomeUi";
const LeftNavigation = () => {
  return (
    <HomeLeftContainer>
      <HomeLeftFixedContainer>
        <AiFillHome size={24} />
        <IoIosNotifications size={24} />
        <BiEdit size={24} />
      </HomeLeftFixedContainer>
      <HomeProfileContainer>
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          className="h-10 w-10 mt-80 "
          alt=""
        />
      </HomeProfileContainer>
    </HomeLeftContainer>
  );
};

export default LeftNavigation;
