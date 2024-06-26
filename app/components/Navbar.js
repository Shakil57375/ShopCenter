import Image from "next/image";
import React from "react";
import menuImage from "../assets/svg/menu.svg";
import Logo from "../assets/lws-logo-black.svg";
import Avatar from "../assets/svg/avatar.svg";
import shoppingCart from "../assets/svg/shopping-Cart.svg";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
            <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
                <div className="flex items-center gap-2">
                    <Image
                        src={menuImage}
                        className="lg:hidden w-5 h-5"
                        alt="menu image"
                    />
                    <Link href="/">
                        <Image src={Logo} className="h-10" alt="Logo" />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
                <Image
                    src={Avatar}
                    alt="Avatar"
                    className="hidden lg:block w-[18px] h-[18px]"
                />
                <Image
                    src={shoppingCart}
                    alt="My Image"
                    className="block w-5 h-5"
                />
            </div>
        </nav>
    );
};

export default Navbar;
