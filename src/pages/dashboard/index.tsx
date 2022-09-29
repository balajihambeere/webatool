import { ReactElement } from "react";
import DashboardLayout from "src/features/dashboard/views/Layout";
import { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
    return (<div className="flex justify-center items-center">
        <h1 className="text-3xl">
            Comming Soon..
        </h1>
    </div>
    )
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
    return (<DashboardLayout>
        {page}
    </DashboardLayout>
    );
}

export default DashboardPage