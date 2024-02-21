import React from "react";
import Switcher from "../Switcher";

const Header = () => {
    return (
        <div>
            <div className=" border-b-[2px] border-oraange bg-white dark:bg-custom-black min-h-[114px] max-sm:min-h-[89px] fixed top-0 left-0 w-full z-50 rounded-b-2xl flex justify-center items-center">


                <div className="absolute right-0 flex gap-8 mr-8 justify-between">
                    <a className="text-custom-dark  dark:text-white ">Placeholder</a>
                    <Switcher />
                </div>
            </div>
        </div>
    );
};

export default Header;
