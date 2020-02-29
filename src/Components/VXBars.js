import React from "react";
import { Bar } from '@vx/shape';
import { Group } from "@vx/group";
import { scaleBand, scaleLinear } from "@vx/scale";
import { AxisLeft, AxisBottom } from "@vx/axis";

const x = d => d.label;
const y = d => d.value;

export default ({ data, width, height }) => {
  // bounds
  const xMax = width-150;
  const yMax = height-150;

  // scales
  const xScale = scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x),
    padding: 0.4
  });
  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, Math.max(...data.map(y))]
  });

  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill={'#fff'} rx={5} />
      <Group top={50} left={50}>
        <AxisLeft left={10} scale={yScale} numTicks={4} label="Posts" />
        {data.map(d => {
          const label = x(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - yScale(y(d));
          const barX = xScale(label);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${label}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill="rgba(50, 148, 148, 0.8)"
            />
          );
        })}
        <AxisBottom scale={xScale} label="Months" labelOffset={15} top={yMax} />
      </Group>
    </svg>
  );
}
