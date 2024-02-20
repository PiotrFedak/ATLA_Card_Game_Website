import React from "react";
import ATLA from "../img/ATLA.png";

const Header = () => {
    return (
        <div>
            <div className="border border-b-[2px] border-black bg-custom-white min-h-[114px] max-sm:min-h-[89px] fixed top-0 left-0 w-full z-50 rounded-b-2xl flex justify-center items-center">
                <img
                    src={ATLA}
                    alt="ATLA Logo"
                    className="max-w-full h-auto max-h-[150px] sm:max-w-[320px] sm:max-h-[200px]"
                />
            </div>
        </div>
    );
};

export default Header;
