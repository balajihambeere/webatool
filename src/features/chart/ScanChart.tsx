import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const COLORS = ["#00e676", "#00b0ff", "#ff9100", "#ff1744"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

interface ScanChartProps {
    data: { name: string; value: number; }[]
}
const ScanChart = (props: ScanChartProps): React.ReactElement => {
    const { data } = props;
    return (
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={6}>
                <Stack direction="row" spacing={1}>
                    {data.map((entry, index) => (
                        <Chip key={`Chip-${index}`} label={entry.name} sx={{ fontSize: 18, backgroundColor: COLORS[index % COLORS.length] }} />
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie id="pie-chart"
                            data={data}
                            // cx={200}
                            // cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
    );
};

export default ScanChart;
