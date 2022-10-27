import React from "react";
import Footer from "./components/shared/footer/Footer";
import Routers from "./routes/Routers";

const App2 = () => {
  return (
    <div className="">
      <HomeContainer>
        <HomeGrid>
          {/* section 1 */}
          <HomeLeftContainer>
            <div className="fixed space-y-6">
              <AiFillHome size={24} />
              <IoIosNotifications size={24} />
              <BiEdit size={24} />
            </div>
            <div className="absolute -m-4 mt-80 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                className="h-10 w-10 mt-80 "
                alt=""
              />
            </div>
          </HomeLeftContainer>
          {/* section 2 */}
          <div className="col-span-11 lg:col-span-8 border-r border-l border-gray-300 h-full md:px-20">
            <Navbar />
            <Articles />
          </div>
          {/* section 3 */}
          <div className="lg:col-span-3 col-span-12 mt-20 lg:mx-0 mx-auto px-4 ">
            <div>
              <Categories />
              <RecentArticles />
              <Writers />
              <Tags />
              <OldestArticles />
            </div>
          </div>
        </HomeGrid>
      </HomeContainer>
    </div>
  );
};
const App = () => {
  return (
    <>
      <Routers />
      <Footer />
    </>
  );
};
export default App;
