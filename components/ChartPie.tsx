import React, { FC } from "react";
import { PieChart } from "react-native-svg-charts";
import { styles } from "../styles/Styles";
import { Labels } from './ChartPieLabels';

export interface PieChartData2 {
  avatarId: string;
  color: string;
  energy: number;
}

interface Props {
  data: PieChartData2[];
}

export const ChartPie: FC<Props> = (props) => {
  const pieData = props.data 
    .filter((value) => value.energy > 0)
    .map((value, index) => ({
      value: value.energy,
      svg: {
        fill: value.color
      },
      key: 'avatar-'+value.avatarId
    }))
  return <PieChart style={styles.pieChartStyle} data={pieData} innerRadius={0} padAngle={0} >
    <Labels/>
    </PieChart>
}

