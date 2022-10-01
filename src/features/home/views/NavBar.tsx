import Link from "next/link";
import React from "react";
import { MenuItemType } from "../types/MenuItem";

const styles = {
    container: "relative container flex flex-row  justify-start items-center mx-auto py-5",
    brand: "text-xl text-indigo-700",
    menuItem: "text-base ml-5 font-medium text-gray-500 hover:text-gray-900",
}

const MenuItems = [
    { path: "/dashboard", name: "Dashboard" } as MenuItemType,
    { path: "/documentation", name: "Documentation" } as MenuItemType,
    { path: "/login", name: "Log In" } as MenuItemType
] as Array<MenuItemType>;

const NavBar = (): React.ReactElement => {
    return (
        <div className={styles.container}>
            <Link href="/">
                <a className={styles.brand}>WEBATOOL</a>
            </Link>
            {MenuItems.map((item: MenuItemType, index: number) => {
                return (<Link key={`menu-${index}`} href={item.path} >
                    <a className={styles.menuItem}>{item.name}</a>
                </Link>)
            })}
        </div>
    )
};

export default NavBar;