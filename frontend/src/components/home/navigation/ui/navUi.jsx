import tw from "tailwind-styled-components";
export const Input = tw.input`
border-2 border-gray-300 bg-white h-8 pl-2 pr-8 rounded-lg text-sm focus:outline-none focus:border-hidden focus:ring-2 ring-blue-400 w-80
`;

export const SearchBtn = tw.button`
absolute right-0 top-0 mt-2 mr-2
`;
export const NavContainer = tw.div`
flex items-center justify-between flex-wrap py-7 px-2`;

export const InputContainer = tw.div`
relative ml-auto text-gray-600 lg:block hidden`;
export const Logo = () => {
  return (
    <img
      src="https://blog.freshprep.ca/wp-content/uploads/2021/10/Freshprep_Blog_Logo_R2-01-2.png"
      className="md:w-44 w-32"
      alt="Logo"
    />
  );
};
export const BtnSvg = () => {
  return (
    <svg
      class="text-gray-600 h-4 w-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 56.966 56.966"
      width="512px"
      height="512px"
    >
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
    </svg>
  );
};
