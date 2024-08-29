"use client";
import React from "react";
import Link from "next/link";
import { Search, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  const CustomLegend = () => (
    <ul className="flex flex-col justify-center ml-6">
      {pieData.map((entry, index) => (
        <li key={`legend-${index}`} className="flex items-center mb-2">
          <span
            className="inline-block w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          ></span>
          <span className="text-sm font-medium text-black">{entry.name}</span>
          <span className="text-sm font-medium text-black ml-2">
            {entry.value.toFixed(2)}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="p-8 w-screen bg-white ">
      <h1 className="text-2xl font-bold mb-6 text-black flex justify-center align-middle">
        Dashboard
      </h1>
      <div className="flex justify-center align-middle text-black my-5 border border-gray-200 p-5">
        <div className="relative w-[40%]">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 rounded-lg shadow-md py-6"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <MetricCard title="Previous Month Order" value="3,458" link="/" />
        <MetricCard
          title="Order & Payment Received"
          value="153"
          link="/Table"
        />
        <MetricCard title="Payment Pending" value="229" link="/" />
        <MetricCard title="Tolerance rate breached" value="3" link="/" />
        <MetricCard title="Return" value="277" link="/" />
        <MetricCard title="Negative Payout" value="666" link="/" />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="shadow-md p-4 rounded-md">
          <h2 className="text-lg font-semibold text-black mb-4">
            Reimbursements by Dispute Type - last 30 days
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="shadow-md p-4 rounded-md">
          <Card className="flex flex-col">
            <CardHeader className="pb-0">
              <CardTitle className="text-lg font-semibold text-black mb-4">
                % Reimbursements by Dispute Type - this year
              </CardTitle>
            </CardHeader>
            <CardContent className="flex">
              <ResponsiveContainer width="50%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={50}
                    paddingAngle={5}
                    dataKey="value"
                    cornerRadius={5}
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
              <CustomLegend />
            </CardContent>
          </Card>
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
    <h3 className="text-sm text-black mb-2">{title}</h3>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-black">{value}</span>
      {link && (
        <Link href={link} className="text-indigo-600">
          &gt;
        </Link>
      )}
    </div>
  </div>
);

export default Dashboard;
