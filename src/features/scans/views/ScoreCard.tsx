import React from "react";
import { capitalizeFirstLetter } from "src/utils/Helper";

export interface ScoreCardProps {
    title: string;
    score: number;
    handleViewDetailsClick: (e: React.MouseEvent<HTMLButtonElement>, section: string) => void;
    colorClass: string;
};

const ScoreCard = (props: ScoreCardProps): React.ReactElement => {
    const { title, score, colorClass, handleViewDetailsClick } = props;
    return (<div className={`h-44 w-60 shadow rounded-lg ${colorClass}`}>
        <div className="flex flex-col p-5">
            <div className="text-xl">{capitalizeFirstLetter(title)}</div>
            <div className="text-6xl text-center">{score}</div>
            <div className="underline text-right mt-5">
                <button className="underline"
                    onClick={(e) => handleViewDetailsClick(e, title)}>View Details
                </button>
            </div>
        </div>
    </div>)
};


export default ScoreCard;