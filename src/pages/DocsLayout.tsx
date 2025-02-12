import { ReactNode } from "react";
import Sidebar from "../components/sections/sidebar";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <div className="border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Documentation</h1>
          </div>
          <div className="prose lg:prose-xl">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DocsLayout;
