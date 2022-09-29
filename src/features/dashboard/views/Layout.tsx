import React from "react";
import SideBar from "./SideBar";

const DashboardLayout = ({ children }: any): React.ReactElement => {
    return (<div className="flex flex-row">
        <SideBar />
        <div className="flex-initial w-screen bg-slate-50">
            <div className="h-20 bg-slate-800 w-full">
            </div>
            <div>
                {children}
            </div>

        </div>

    </div>);
};

export default DashboardLayout;