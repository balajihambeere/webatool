import { NextPageWithLayout } from "@/pages/_app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useAppContext } from "src/contextState";
import DashboardLayout from "src/features/dashboard/views/Layout";
import ScoreCard from "src/features/scans/views/ScoreCard";
import useScans from "src/features/scans/views/useScans";

const ChartBar = dynamic(() => import('../../../features/scans/views/Chart'), {
    ssr: false,
});

const ScanResultPage: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query
    const { data } = useScans(Number(id));
    const { scanhistories } = data || {};

    const details = scanhistories?.length > 0 ? scanhistories[0] : [];

    const charData = [
        { name: "passes", score: details?.results?.passes?.length, bgColor: 'bg-green-400' },
        { name: "inapplicable", score: details?.results?.inapplicable?.length, bgColor: 'bg-sky-400' },
        { name: "incomplete", score: details?.results?.incomplete?.length, bgColor: 'bg-orange-400' },
        { name: "violations", score: details?.results?.violations?.length, bgColor: 'bg-red-500' }
    ];

    const { addItem, removeItem, } = useAppContext();

    const handleAddItem = (name: string) => {
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
    };

    const handleClick = (e: React.MouseEvent<SVGElement>, name: string) => {
        e.preventDefault();
        handleAddItem(name);
    };

    const handleViewDetailsClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
        e.preventDefault();
        handleAddItem(name);
    };

    return (<>
        <h1 className="text-3xl mt-5 ml-5">Reports </h1>
        <div className="flex flex-row mt-5">
            <div className="flex basis-1/2 ml-5">
                <div className="grid grid-cols-2 gap-8">
                    {charData.map((item, index) => {
                        return (<ScoreCard key={index}
                            score={item.score} title={item.name}
                            handleViewDetailsClick={handleViewDetailsClick}
                            colorClass={item.bgColor}
                        />)
                    })}
                    {/* <ScoreCard
                        score={details?.results?.passes?.length} title='Passes'
                        handleViewDetailsClick={handleViewDetailsClick}
                        colorClass='bg-green-400'
                    />
                    <ScoreCard
                        score={details?.results?.inapplicable?.length}
                        title='Inapplicable'
                        handleViewDetailsClick={handleViewDetailsClick}
                        colorClass='bg-sky-400'
                    />
                    <ScoreCard
                        score={details?.results?.incomplete?.length}
                        title='Incomplete'
                        handleViewDetailsClick={handleViewDetailsClick}
                        colorClass='bg-orange-400'
                    />
                    <ScoreCard
                        score={details?.results?.violations?.length}
                        title='Violations'
                        handleViewDetailsClick={handleViewDetailsClick}
                        colorClass='bg-red-500'
                    /> */}
                </div>
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