import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/logo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import "@/index.css"

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }, props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [ isMenuToggled, setIsMenuToggled ] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const navbarBackground = isTopOfPage ? "" : "bg-rgb-red-50 drop-shadow";
  const { isFixed, setIsFixed }  = useState<boolean>(false);


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#navbar");
      const navbarHeight = 100;
      const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);
        if (window.scrollY > 100) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  

  return (
    <nav id="navbar" style={{
      position: isFixed ? 'fixed' : 'relative',
    }}>
      <div
        style={{
          background: "#F06D67",
          width: "100%",
          height: ".75rem",
          position: "relative",
        }}
      ></div>
      <div
        style={{
          background: "#FFBC7D",
          width: "100%",
          height: ".75rem",
          position: "relative",
        }}
      ></div>
      <div
        style={{
          background: "#F0DCB2",
          width: "100%",
          height: ".75rem",
          position: "relative",
        }}
      ></div>
      <div
        style={{
          background: "#7EAC8B",
          width: "100%",
          height: ".75rem",
          position: "relative",
        }}
      ></div>
      <div
        style={{
          background: "#697BA7",
          width: "100%",
          height: ".75rem",
          position: "relative",
        }}
      ></div>
      <div
        style={{
          background: "#A3718E",
          width: "100%",
          height: ".75rem",
          position: "relative",
        }}
      ></div>

      <div id="navbar"
        style={{
          backgroundColor: "#835368",
          position: isFixed ? 'fixed' : 'sticky',

        }}
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 h-20 my-0`}>
          <div className={`${flexBetween} w-full gap-20 my-0`}>
            {/* Left Side */}
            <img style={{ width: "200px", marginRight: "75px" }} alt="logo" src={Logo} />

            {/* Right Side */}

            {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full `}>
              {/* Inner Left Side */}
              <div
                style={{ color: "white" }}
                className={`${flexBetween} gap-40 text-lg`}
              >
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Adopt"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Get Involved"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* Inner Right Side */}
              <div>
                <ActionButton setSelectedPage={setSelectedPage}>Donate</ActionButton>
              </div> 
            </div> )
            : (
              <button className="rounded-full bg-white-100 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-purple-50"></Bars3Icon>
              </button> 
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL*/}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-purple-70 drop-shadow-xl ">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className=" h-6 w-6 text-white"  />
            </button>

          </div>
          {/* Menu Items*/}
          <div
              style={{ color: "white" }}
              className="ml-[33%] flex flex-col gap-10 text-2xl"
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
               <Link
                page="Adopt"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Get Involved"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
