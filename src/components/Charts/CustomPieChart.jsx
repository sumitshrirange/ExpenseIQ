import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data = [],
  label,
  totalAmount,
  colors = [],
  showTextAnchor,
}) => {
  // Attach colors directly to data
  const coloredData = data.map((item, index) => ({
    ...item,
    fill: colors[index % colors.length],
  }));

  return (
    <ResponsiveContainer width="100%" height={330}>
      <PieChart>
        <Pie
          data={coloredData}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        />

        <Tooltip content={CustomTooltip} />
        <Legend content={CustomLegend} wrapperStyle={{ marginTop: 25 }} />

        {showTextAnchor && (
          <>
            <text
              x="50%"
              y="50%"
              dy={-25}
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
            >
              {label}
            </text>

            <text
              x="50%"
              y="50%"
              dy={8}
              textAnchor="middle"
              fill="#333"
              fontSize="24px"
              fontWeight="600"
            >
              {totalAmount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
