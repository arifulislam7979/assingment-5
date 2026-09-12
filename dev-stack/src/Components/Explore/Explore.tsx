

import { use } from "react";
import type DevDataType from "../../Type/devDataType";
import ExploreCard from "../ExploreCard/ExploreCard";

export interface ExploreProps {
  devData: Promise<DevDataType[]>;
}

const Explore = ({ devData }: ExploreProps) => {
  const mainData = use(devData);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <h1 className="text-[36px] font-bold text-[#0F172A]">
          Explore the{" "}
          <span className="font-bold bg-linear-to-r from-pink-500 via-orange-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B] mb-12">
          Pick one technology per category to build your ideal stack.
        </p>

        {/* Main Grid Layout: Left (3 cols) + Right Sidebar (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* Left Side: Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              mainData.map((data) => <ExploreCard
               key={data.id} 
               data={data} 
              />)
            }
          </div>

          {/* Right Side: Your Stack Sidebar */}
          <div className="lg:col-span-1 sticky top-6">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
              <p className="text-xs text-gray-400 mb-4">
                No technologies selected yet.
              </p>

              {/* Empty State Box */}
              <div className="border border-dashed border-gray-200 rounded-xl p-8 flex items-center justify-center text-center">
                <span className="text-xs text-gray-400">
                  Your stack is empty.
                </span>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Explore;