import React, { useState, ComponentProps } from 'react';
import ReactTooltip from 'react-tooltip';
import { PieChart } from 'react-minimal-pie-chart';

type Props = {
  data: ComponentProps<typeof PieChart>['data'];
};

function makeTooltipContent(entry: Props['data'][0]) {
  return <span style={{color: entry.color,fontWeight: 'bold'}}>
            {entry.tooltip} - {entry.value}
          </span>;
}

function ToolTip(props: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const data = props.data.map(({ title, ...entry }) => {
    return {
      ...entry,
      tooltip: title,
    };
  });

  return (
    <div data-tip="" data-for="chart">
      <PieChart
        data={data}
        startAngle={180}
        lengthAngle={180}
        viewBoxSize={[100, 50]}
        labelStyle={(index) => ({
            fill: data[index].color,
            fontSize: '3px',
            fontFamily: 'Baloo Thambi 2',
        })}
        radius={40}
        // labelPosition={112}
        lineWidth={30}
        // label={({ dataEntry }) => dataEntry.value}
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(null);
        }}
      />
      <ReactTooltip
        id="chart"
        getContent={() =>
          typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
        }
      />
    </div>
  );
}

export default ToolTip;