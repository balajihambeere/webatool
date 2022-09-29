import Link from "next/link";
import React from "react";

const styles = {
    container: "relative container flex flex-row  justify-start items-center mx-auto py-5",
    brand: "text-xl text-indigo-700",
    menuItem: "text-base ml-5 font-medium text-gray-500 hover:text-gray-900",
}

const MenuItems = [
    // { id: 0, path: "/", name: "Home" },
    { id: 1, path: "/dashboard", name: "Dashboard" },
    { id: 2, path: "/documentation", name: "Documentation" },
    { id: 3, path: "/login", name: "Log In" }
];

const NavBar = (): React.ReactElement => {
    return (
        <div className={styles.container}>
            <Link href="/">
                <a className={styles.brand}>WEBATOOL</a>
            </Link>
            {MenuItems.map(item => {
                return (<Link key={item.id} href={item.path} >
                    <a className={styles.menuItem}>{item.name}</a>
                </Link>)
            })}
        </div>
    )
};

export default NavBar;