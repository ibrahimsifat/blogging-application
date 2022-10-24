import React from "react";
import {
  BtnSvg,
  Input,
  InputContainer,
  Logo,
  NavContainer,
  SearchBtn,
} from "./ui/navUi";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo />
      <InputContainer>
        <Input type="search" name="search" placeholder="Search" />
        <SearchBtn type="submit">
          <BtnSvg />
        </SearchBtn>
      </InputContainer>
    </NavContainer>
  );
};

export default Navbar;
