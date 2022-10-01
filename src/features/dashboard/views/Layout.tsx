import React from "react";
import SideBar from "./SideBar";

const styles = {
    section: 'flex-initial w-screen bg-slate-50',
    navBar: "h-20 bg-slate-800 w-full"

};
const DashboardLayout = ({ children }: any): React.ReactElement => {
    return (<div className="flex flex-row">
        <SideBar />
        <section className={styles.section}>
            <div className={styles.navBar}>
            </div>
            <div>
                {children}
            </div>
        </section>
    </div>);
};

export default DashboardLayout;