import React from 'react';
import { Circle, G, Image } from 'react-native-svg'
import { PieChartData } from 'react-native-svg-charts'
import { singleAvatarPath } from '../data/avatars';

interface LabelsProps {
  slices: {
    pieCentroid: string
    labelCentroid: string
    data: PieChartData
  }[]
}

export const Labels = (props: Partial<LabelsProps>) => {
  const { slices } = props as LabelsProps
  return (
    <>
      {slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice
        return (
          <G key={index} x={labelCentroid[0]} y={labelCentroid[1]}>
            <Circle r={18} fill={'white'} />
            <Image
              x={-10}
              y={-10}
              width={20}
              height={20}
              preserveAspectRatio="xMidYMid slice"
              href={singleAvatarPath(String(data.key))}
            />
          </G>
        )
      })}
    </>
  )
}
