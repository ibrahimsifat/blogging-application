import tw from "tailwind-styled-components";

export const HomeContainer = tw.div`container-sm mx-auto md:px-16 px-4
`;
export const HomeGrid = tw.div`grid grid-cols-12 gap-4  relative
`;

// left site of home page
export const HomeLeftContainer = tw.div`ml-auto flex justify-center flex-col h-screen pr-5 cursor-pointer`;
export const HomeLeftFixedContainer = tw.div`fixed space-y-6`;
export const HomeProfileContainer = tw.div`fixed -m-4 mt-80 pt-80`;

// center site of home page
export const HomeCenterContainer = tw.div`col-span-11 lg:col-span-7 border-r border-l border-gray-300 h-full md:px-20`;

// right site of home page
export const HomeRightContainer = tw.div`lg:col-span-4 col-span-12 mt-20 lg:mx-0 mx-auto px-4`;
