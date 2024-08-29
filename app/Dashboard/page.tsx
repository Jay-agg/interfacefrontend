"use client";
import React from "react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const barData = [
    { name: "Cost of Advertising", value: 25 },
    { name: "FBA Inbound Pickup Service", value: 35 },
    { name: "FBA Inventory Storage Fee", value: 45 },
  ];

  const pieData = [
    { name: "Customer Return", value: 23188.4 },
    { name: "Customer Service Issue", value: 14889.69 },
    { name: "Damaged/Warehouse", value: 2191.21 },
    { name: "Lost Inbound", value: 35015.2 },
    { name: "Fee Correction", value: 1351.91 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088FE"];

  return (
    <div className="p-8 ml-5 w-screen bg-white">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <MetricCard title="Previous Month Order" value="3,458" link="/" />
        <MetricCard
          title="Order & Payment Received"
          value="153"
          link="/TableView"
        />
        <MetricCard title="Payment Pending" value="229" link="/" />
        <MetricCard title="Tolerance rate breached" value="3" link="/" />
        <MetricCard title="Return" value="277" link="/" />
        <MetricCard title="Negative Payout" value="666" link="/" />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Reimbursements by Dispute Type - last 30 days
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">
            % Reimbursements by Dispute Type - this year
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  link?: string;
}

const MetricCard = ({ title, value, link }: MetricCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-sm text-gray-500 mb-2">{title}</h3>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold">{value}</span>
      {link && (
        <Link href={link} className="text-indigo-600">
          &gt;
        </Link>
      )}
    </div>
  </div>
);

export default Dashboard;
