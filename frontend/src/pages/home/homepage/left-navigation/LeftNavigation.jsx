import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  HomeLeftContainer,
  HomeLeftFixedContainer,
  HomeProfileContainer,
} from "../../ui/HomeUi";
const LeftNavigation = () => {
  const { user } = useSelector((state) => state?.auth) || {};
  return (
    <HomeLeftContainer>
      <HomeLeftFixedContainer>
        <AiFillHome size={24} />
        <IoIosNotifications size={24} />
        <BiEdit size={24} />
      </HomeLeftFixedContainer>
      <HomeProfileContainer>
        {user?.id ? (
          <img
            src={
              user?.image ??
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            className="h-10 w-10  rounded-full"
            alt=""
          />
        ) : (
          <p>
            <NavLink to="/login">Sign In</NavLink>
          </p>
        )}
      </HomeProfileContainer>
    </HomeLeftContainer>
  );
};

export default LeftNavigation;
