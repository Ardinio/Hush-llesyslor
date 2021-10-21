import React from "react";
import { PieChart } from "react-native-svg-charts";
import { styles } from "../styles/Styles";

interface PieChartData {
    avatar: string;
    color: string;
    value: number;
}

interface Props {
    data: PieChartData[];
}

export const ChartPie = () => {
    const data = [33, 33, 34]
    const color = ["red", "green", "blue"]

    // Will not be random when we add the avatars
    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: color[index],
                onPress: () => console.log("press", index),
            },
            key: `pie-${index}`
        }))
    return <PieChart style={styles.pieChartStyle} data={pieData} innerRadius={0} padAngle={0} />
}

