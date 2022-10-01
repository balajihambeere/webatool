import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    ResponsiveContainer
} from "recharts";

const COLORS = ["#00e676", "#00b0ff", "#ff9100", "#ff1744"];

interface ChartBarProps {
    data?: any;
    onCellClick: (e: React.MouseEvent<SVGElement>, name: string) => void;
}
const ChartBar = (props: ChartBarProps) => {
    const { data, onCellClick } = props;

    return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#8884d8">
                    {data.map((entry: any, index: number) => (
                        <Cell onClick={(e) => onCellClick(e, entry?.name)} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartBar;
