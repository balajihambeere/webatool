import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DashBoardIcon from "src/components/icons/DashBoardIcon";
import ScanIcon from "src/components/icons/ScanIcon";
import { NavItemType } from "../types/NavItem";

const styles = {
    navContainer: 'flex-initial w-80 bg-slate-800 h-screen',
    navBar: 'flex flex-col',
    brand: "font-medium px-3 py-5 text-white text-3xl text-center hover:bg-slate-600 hover:text-emerald-500 shadow ",
    navItem: "flex m-1 flex-rowfont-medium px-5 py-4 text-white text-base hover:bg-slate-600 shadow rounded"
};


const navIitems = [
    {
        name: "DashBoard",
        path: "/dashboard",
        icon: <DashBoardIcon />
    } as NavItemType,
    {
        name: "Scans",
        path: "/dashboard/scans",
        icon: <ScanIcon />
    } as NavItemType,
    {
        name: "New Scan",
        path: "/",
        icon: <ScanIcon />
    } as NavItemType,
] as Array<NavItemType>;


const SideBar = (): React.ReactElement => {
    const router = useRouter();
    return (
        <div className={styles.navContainer}>
            <nav className={styles.navBar}>
                <Link href="/">
                    <a className={styles.brand}>WEBATOOL</a>
                </Link>
                {
                    navIitems.map((item: NavItemType, index: number) => {
                        return (
                            <Link key={`item-${index}`} href={item.path} >
                                <a className={`${styles.navItem} ${router.pathname === item.path ? "bg-slate-600 text-emerald-500" : ""}`}>
                                    {item.icon}
                                    <p className="ml-3">{item.name}</p>
                                </a>
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    )
};

export default SideBar;