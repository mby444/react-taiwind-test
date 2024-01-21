import { useNavigate } from "react-router-dom";
import "../index.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-16 font-roboto flex bg-[#FBFBFD] fixed z-10">
      <div className="flex items-center w-1/4">
        <h1
          onClick={logoClickHandler}
          className="text-logo text-2xl not-italic font-black leading-9 w-full text-right pr-8 pl-2"
        >
          Landing
        </h1>
      </div>
      <div className="font-roboto flex items-center justify-end w-3/4 pr-8">
        <button
          onClick={() => navigate("/")}
          className="text-[#929ECC] mx-6 h-6 flex-shrink-0 text-sm not-italic font-normal leading-6"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/about")}
          className="text-[#929ECC] mx-6 h-6 flex-shrink-0 text-sm not-italic font-normal leading-6"
        >
          About
        </button>
        <button
          onClick={() => navigate("/product")}
          className="text-[#929ECC] mx-6 h-6 flex-shrink-0 text-sm not-italic font-normal leading-6"
        >
          Products
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="text-[#929ECC] mx-6 h-6 flex-shrink-0 text-sm not-italic font-normal leading-6"
        >
          Contacts
        </button>
        <button
          onClick={() => navigate("/purchase")}
          className="w-32 h-[28px] ml-4 flex-shrink-0 rounded-sm bg-[#111B47] text-white text-xs"
        >
          Purchase UI Kit
        </button>
      </div>
    </div>
  );
};
