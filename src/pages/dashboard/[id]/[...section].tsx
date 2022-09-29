import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useAppContext } from "src/contextState";
import DashboardLayout from "src/features/dashboard/views/Layout";

const ScanDetailsPage: NextPageWithLayout = () => {
    const { items } = useAppContext();
    const router = useRouter();
    const { section } = router.query;
    return (<div className="px-5 py-5">
        {section && <div className="text-xl font-bold">{String(section[1])?.charAt(0).toUpperCase() + String(section[1]).slice(1)}</div>}
        {items && items[0]?.map((item: any) => {
            return (<div key={item} className="w-full mx-auto p-2">
                <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 shadow-lg p-6 rounded-lg">
                    <summary className="text-lg leading-6 text-slate-900 dark:text-white font-semibold select-none">
                        {item?.id}
                    </summary>
                    <div className="mt-3 text-lg leading-6 text-slate-600 dark:text-slate-400">
                        <p> <strong>Description: </strong> {item?.description}</p>
                    </div>
                    <div className="mt-3 text-lg leading-6 text-slate-600 dark:text-slate-400">
                        <p><strong>Help: </strong> {item?.help}</p>
                    </div>
                    <div className="mt-3 text-lg leading-6 text-slate-600 dark:text-slate-400">
                        <p><strong>Help Url: </strong> <a className="underline text-indigo-900" href={item.helpUrl} target="_blank" rel="noopener noreferrer">click here</a></p>
                    </div>
                    <div className="mt-3 text-lg leading-6 text-slate-600 dark:text-slate-400">
                        <p><strong>Impact: </strong> <span className="text-red-700">{item?.impact}</span></p>
                    </div>
                </details>
            </div>)
        })}

    </div>)
}

ScanDetailsPage.getLayout = function getLayout(page: ReactElement) {
    return (<DashboardLayout>
        {page}
    </DashboardLayout>
    );
}

export default ScanDetailsPage;