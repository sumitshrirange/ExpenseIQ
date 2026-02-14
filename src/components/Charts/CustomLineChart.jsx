import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const CustomLineChart = ({ data = [] }) => {
  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#875CF5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#875CF5" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid stroke="none" />

          <XAxis dataKey="month" tick={{ fontSize: 11 }} strokeOpacity={0} />

          <YAxis tick={{ fontSize: 12 }} strokeOpacity={0} />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#875CF5"
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
