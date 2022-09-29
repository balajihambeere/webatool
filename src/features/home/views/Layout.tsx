import React from "react";
import NavBar from "./NavBar";

const HomeLayout = ({ children }: any): React.ReactElement => {
    return (<div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    </div>);
}
export default HomeLayout