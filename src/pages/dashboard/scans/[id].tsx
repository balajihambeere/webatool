import { NextPageWithLayout } from "@/pages/_app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useAppContext } from "src/contextState";
import DashboardLayout from "src/features/dashboard/views/Layout";
import useScans from "src/features/scans/useScans";

const ChartBar = dynamic(() => import('../../../features/scans/Chart'), {
    ssr: false,
});

const HealtChart = dynamic(() => import('../../../features/scans/HealthChart'), {
    ssr: false,
});
const ScanResultPage: NextPageWithLayout = () => {

    const router = useRouter();
    const { id } = router.query
    const { data } = useScans(Number(id));
    const { scanhistories } = data || {};

    const details = scanhistories?.length > 0 ? scanhistories[0] : [];

    const charData = [
        { name: "passes", result: details?.results?.passes?.length },
        { name: "inapplicable", result: details?.results?.inapplicable?.length },
        { name: "incomplete", result: details?.results?.incomplete?.length },
        { name: "violations", result: details?.results?.violations?.length }
    ];

    const { addItem, removeItem, } = useAppContext();

    const handleClick = (e: React.MouseEvent<SVGElement>, name: string) => {
        e.preventDefault();
        removeItem();
        switch (name) {
            case "passes":
                addItem(details?.results?.passes);
                break;
            case "inapplicable":
                addItem(details?.results?.inapplicable);
                break;
            case "incomplete":
                addItem(details?.results?.incomplete);
                break;
            case "violations":
                addItem(details?.results?.violations);
                break;
            default:
                addItem([]);
        }
        router.push(`${id}/${name?.toLowerCase()}`)

    }

    const handleViewDetailsClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
        e.preventDefault();
        removeItem();
        switch (name) {
            case "passes":
                addItem(details?.results?.passes);
                break;
            case "inapplicable":
                addItem(details?.results?.inapplicable);
                break;
            case "incomplete":
                addItem(details?.results?.incomplete);
                break;
            case "violations":
                addItem(details?.results?.violations);
                break;
            default:
                addItem([]);
        }
        router.push(`${id}/${name?.toLowerCase()}`)

    }
    return (<>
        <h1 className="text-3xl mt-5 ml-5">Reports </h1>
        <div className="flex flex-row mt-5">
            <div className="flex basis-1/2 ml-5">
                <div className="grid grid-cols-2 gap-8">
                    <div className="h-44 w-60 bg-green-400 shadow rounded-lg">
                        <div className="flex flex-col p-5">
                            <div className="text-xl">Passes</div>
                            <div className="text-6xl text-center">{details?.results?.passes?.length}</div>
                            <div className="underline text-right mt-5">
                                <button className="underline"
                                    onClick={(e) => handleViewDetailsClick(e, 'passes')}>View Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-44 w-60 bg-sky-400 shadow rounded-lg">
                        <div className="flex flex-col p-5">
                            <div className="text-xl">Inapplicable</div>
                            <div className="text-6xl text-center">{details?.results?.inapplicable?.length}</div>
                            <div className="underline text-right mt-5">
                                <button className="underline"
                                    onClick={(e) => handleViewDetailsClick(e, 'inapplicable')}>View Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-44 w-60 bg-orange-400 shadow rounded-lg">
                        <div className="flex flex-col p-5">
                            <div className="text-xl">Incomplete</div>
                            <div className="text-6xl text-center">{details?.results?.incomplete?.length}</div>
                            <div className="underline text-right mt-5">
                                <button className="underline"
                                    onClick={(e) => handleViewDetailsClick(e, 'incomplete')}>View Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-44 w-60 bg-red-500 shadow rounded-lg">
                        <div className="flex flex-col p-5">
                            <div className="text-xl">Violations</div>
                            <div className="text-6xl text-center">{details?.results?.violations?.length}</div>
                            <div className="underline text-right mt-5">
                                <button className="underline"
                                    onClick={(e) => handleViewDetailsClick(e, 'violations')}>View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <ul className="list-none">
                    <div className="text-xl font-bold">Test Environment</div>
                    <li className="flex flex-row mt-2 border">
                        <div className="flex basis-1/2">
                            <strong>UserAgent : </strong>
                        </div>
                        <div className="flex basis-1/2 ">
                            {details?.results?.testEnvironment?.userAgent}
                        </div>
                    </li>
                </ul> */}
                {/* <HealtChart data={charData} /> */}
            </div>
            <div className="flex flex-col basis-1/2 text-center">
                <ChartBar data={charData} onCellClick={handleClick} />
                <h1 className="text-3xl mt-5">Health Score </h1>
            </div>
        </div>

    </>)
};

ScanResultPage.getLayout = function getLayout(page: ReactElement) {
    return (<DashboardLayout>
        {page}
    </DashboardLayout>
    );
}

export default ScanResultPage;