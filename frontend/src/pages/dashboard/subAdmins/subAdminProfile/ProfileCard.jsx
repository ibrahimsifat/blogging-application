import { Dropdown, DropdownItem } from "@windmill/react-ui";
import React, { useState } from "react";
import {
  OutlineCogIcon,
  OutlineLogoutIcon,
  OutlinePersonIcon,
} from "../../../../assets/dashboard/icons";
const ProfileCard = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }
  return (
    <section class="w-6/12 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
      <div class="flex items-center justify-between">
        <span class="text-gray-400 text-sm">2d ago</span>
        <button class="text-emerald-400" onClick={handleProfileClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
          <Dropdown
            className="bg-gray-900 "
            align="center"
            isOpen={isProfileMenuOpen}
            onClose={() => setIsProfileMenuOpen(false)}
          >
            <DropdownItem tag="a" href="#" className="hover:bg-gray-700">
              <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
              <span>Profile</span>
            </DropdownItem>
            <DropdownItem tag="a" href="#" className="hover:bg-gray-700">
              <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
              <span>Settings</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => alert("Log out!")}
              className="hover:bg-gray-700"
            >
              <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
              <span>Log out</span>
            </DropdownItem>
          </Dropdown>
        </button>
      </div>
      <div className="md:flex justify-evenly items-center">
        <div class="mt-6 w-fit mx-auto md:mx-0">
          <img
            src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
            class={`rounded-full w-28 md:border-6 border-4 ${
              "isActive" ? "border-green-400" : "border-red-400"
            } `}
            alt="profile picture"
            srcset=""
          />
        </div>

        <div className="">
          <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">
              Jonathan Smith
            </h2>
            <p class="text-sm text-gray-500 font-semibold mt-1">
              example@gmail.com
            </p>
            <p class="text-emerald-500 font-semibold mt-1">Sub Admin</p>
          </div>

          <h2 class="text-white font-bold text-xl tracking-wide mt-3">
            Active Articles: <span className="text-emerald-400 ">3</span>
          </h2>
        </div>
      </div>

      <div class="h-1 w-full bg-black mt-8 rounded-full">
        <div class="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
      </div>
      <div class="mt-3 text-white text-sm">
        <span class="text-gray-400 font-semibold">Storage: </span>
        <span>40%</span>
      </div>
    </section>
  );
};

export default ProfileCard;
