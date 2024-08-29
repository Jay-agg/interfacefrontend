import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

const TableView = () => {
  const data = [
    {
      orderId: "171-0359134-XXXXXX",
      netAmount: 1062,
      invoiceAmount: 1336,
      orderDate: "July 18, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
    {
      orderId: "171-0628577-XXXXXX",
      netAmount: 1030,
      invoiceAmount: 1320,
      orderDate: "July 18, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
    {
      orderId: "171-0862578-XXXXXX",
      netAmount: 1030,
      invoiceAmount: 1320,
      orderDate: "July 18, 2024",
      pDescription: "Product A",
      paymentId: "XXXXXXXX",
    },
    {
      orderId: "171-1001409-XXXXXX",
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
    <div className="p-4 bg-white text-black w-full">
      <div className="flex items-center mb-4 text-sm text-gray-500">
        <span className="mr-2">Table View</span>
        <span className="mr-2">/</span>
        <span className="font-semibold">Order & Payment Received</span>
      </div>
      <div className="mb-4 flex justify-end">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            className="pl-10 pr-4 py-2 w-full text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-sm text-gray-500 border-b">
              <th className="p-3 text-left font-medium"></th>
              <th className="p-3 text-left font-medium">Order ID</th>
              <th className="p-3 text-left font-medium">Net Amount</th>
              <th className="p-3 text-left font-medium">Invoice Amount</th>
              <th className="p-3 text-left font-medium">Order Date</th>
              <th className="p-3 text-left font-medium">P_Description</th>
              <th className="p-3 text-left font-medium">Payment D.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="p-3">
                  <Checkbox />
                </td>
                <td className="p-3">{row.orderId}</td>
                <td className="p-3">{row.netAmount}</td>
                <td className="p-3">{row.invoiceAmount}</td>
                <td className="p-3">{row.orderDate}</td>
                <td className="p-3">{row.pDescription}</td>
                <td className="p-3">{row.paymentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
