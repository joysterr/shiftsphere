import { useState } from "react";
import { Link } from "react-router-dom";
import navItems from "../utils/navItems";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    function toggleNavbar() {
        if (navActive) {
            setNavActive(() => false);
        } else {
            setNavActive(() => true);
        }
    }

    return (
        <div className="absolute top-4 left-4 flex flex-row items-center gap-2">
            <button
                onClick={toggleNavbar}
                className="block w-12 h-12 rounded-full text-3xl text-zinc-900 bg-white"
            >
                {navActive ? <>&times;</> : <>&#61;</>}
            </button>
            <nav
                className={`${
                    navActive ? "flex" : "hidden"
                } text-zinc-900 bg-white px-4 py-2 rounded-md`}
            >
                <ul className="flex flex-row gap-4">
                    {navItems.map((item) => {
                        return (
                            <li key={item.key}>
                                <Link
                                    to={item.navLink}
                                    className="transition hover:text-purple-700"
                                >
                                    {item.navName}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
