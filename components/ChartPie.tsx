import React, { FC } from "react";
import { PieChart } from "react-native-svg-charts";
import { styles } from "../styles/Styles";
import { Labels } from './ChartPieLabels';

export interface PieChartInputData {
  avatarId: number;
  color: string;
  energy: number;
}

interface Props {
  data: PieChartInputData[];
}

export const ChartPie: FC<Props> = (props) => {
  const pieData = props.data 
    .filter((value) => value.energy > 0)
    .map((value, index) => ({
      value: value.energy,
      svg: {
        fill: value.color
      },
      key: value.avatarId
    }))

  return (
    <PieChart style={styles.pieChartStyle} data={pieData} innerRadius={0} padAngle={0}>
      <Labels/>
    </PieChart>
  )
}
