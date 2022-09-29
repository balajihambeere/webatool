import { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import React, { ReactElement } from "react";
import DashboardLayout from "src/features/dashboard/views/Layout";
import useScans from "src/features/scans/useScans";

const styles = {
    table: "table-auto mt-5 ml-5 border-collapse border border-purple-400",
    tdItem: "border p-4 border-purple-300"
}
const ScanPage: NextPageWithLayout = () => {
    const { data, loading } = useScans(0);
    return (<>
        {
            data?.length > 0 && !loading ? (<table className={styles.table}>
                <thead className="bg-slate-500 text-white">
                    <tr className="p-5">
                        <th className={styles.tdItem}>URL</th>
                        <th className={styles.tdItem}>CREATED DATE</th>
                        <th className={styles.tdItem}>RESULTS</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item: any) => {
                        return (<tr key={item.id}>
                            <td className={styles.tdItem}>{item?.url}</td>
                            <td className={styles.tdItem}>{item?.createdDate}</td>
                            <td className={styles.tdItem}>
                                <Link href={`/dashboard/scans/${item.id}`}>
                                    <a className="underline text-purple-700" href="">View Details</a>
                                </Link>
                            </td>
                        </tr>);
                    })}
                </tbody>
            </table>) : (<div className=" py-20 text-center">
                <div className="text-4xl">No Records Found!</div>
            </div>)
        }
    </>)
};

ScanPage.getLayout = function getLayout(page: ReactElement) {
    return (<DashboardLayout>
        {page}
    </DashboardLayout>
    );
}

export default ScanPage;