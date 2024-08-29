"use client";
import React from "react";

const TableView = () => {
  const data = [
    {
      orderId: "171-0359114-XXXXXX",
      netAmount: 1062,
      invoiceAmount: 1536,
      orderDate: "July 18, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
    {
      orderId: "171-0628217-XXXXXX",
      netAmount: 1030,
      invoiceAmount: 1520,
      orderDate: "July 18, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
    {
      orderId: "171-0982578-XXXXXX",
      netAmount: 1030,
      invoiceAmount: 1520,
      orderDate: "July 18, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
    {
      orderId: "171-1001429-XXXXXX",
      netAmount: 240,
      invoiceAmount: 347,
      orderDate: "July 18, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
    {
      orderId: "171-1056871-XXXXXX",
      netAmount: 1847,
      invoiceAmount: 2290,
      orderDate: "July 18, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
    {
      orderId: "171-1246877-XXXXXX",
      netAmount: 545,
      invoiceAmount: 799,
      orderDate: "July 17, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
  ];

  return (
    <div className="p-8 bg-slate-50 text-black w-screen">
      <h1 className="text-2xl font-bold mb-6">Table View</h1>
      <h2 className="text-lg font-semibold mb-4">Order & Payment Received</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Order ID</th>
            <th className="p-2 text-left">Net Amount</th>
            <th className="p-2 text-left">Invoice Amount</th>
            <th className="p-2 text-left">Order Date</th>
            <th className="p-2 text-left">P_Description</th>
            <th className="p-2 text-left">Payment ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{row.orderId}</td>
              <td className="p-2">{row.netAmount}</td>
              <td className="p-2">{row.invoiceAmount}</td>
              <td className="p-2">{row.orderDate}</td>
              <td className="p-2">{row.pDescription}</td>
              <td className="p-2">{row.paymentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
