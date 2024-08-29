"use client";
import React from "react";
import Link from "next/link";
import {
  Home,
  Search,
  FileText,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-20 bg-white h-screen flex flex-col items-center py-4 shadow-md pt-10 border border-gray-200">
      <Link href="/dashboard" className="mb-6">
        <Home className="w-6 h-6 text-gray-400 hover:text-indigo-600" />
      </Link>
      <Search className="w-6 h-6 text-gray-400 hover:text-indigo-600 mb-6" />
      <FileText className="w-6 h-6 text-gray-400 hover:text-indigo-600 mb-6" />
      <BarChart2 className="w-6 h-6 text-gray-400 hover:text-indigo-600 mb-6" />
      <Users className="w-6 h-6 text-gray-400 hover:text-indigo-600 mb-6" />
      <Settings className="w-6 h-6 text-gray-400 hover:text-indigo-600 mb-6" />
      <div className="flex-grow"></div>
      <HelpCircle className="w-6 h-6 text-gray-400 hover:text-indigo-600" />
    </div>
  );
};

export default Sidebar;
