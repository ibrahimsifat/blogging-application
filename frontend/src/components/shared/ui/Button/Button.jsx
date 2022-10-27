import tw from "tailwind-styled-components";

const Button = tw.button`
flex uppercase  shadow items-center
focus:shadow-outline focus:outline-none text-white  px-10 rounded
 ${(p) =>
   p.$primary
     ? "bg-blue-600 hover:bg-blue-700"
     : "bg-green-300 hover:bg-green-700"}
 ${(p) => (p.$small ? "py-2 text-xs" : "py-2 text-md")}
`;
export default Button;
