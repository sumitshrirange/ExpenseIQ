import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const CustomBarChart = ({ data = [] }) => {
  // Attach colors directly to data
  const coloredData = data.map((item, index) => ({
    ...item,
    fill: index % 2 === 0 ? "#875CF5" : "#CFBEFB",
  }));

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={coloredData}>
          <CartesianGrid stroke="none" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />

          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="amount" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
