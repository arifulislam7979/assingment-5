import { use } from "react";
import type DevDataType from "../../Type/devDataType";
import ExploreCard from "../ExploreCard/ExploreCard";

export interface ExploreProps {
  devData: Promise<DevDataType[]>
}

const Explore = ({ devData }: ExploreProps) => {
  const mainData = use(devData)
  
  
  return (
    <section>
      <div className="container mx-auto ">
        <h1 className="text-[36px] font-bold text-[#0F172A] ">Explore the <span className=" font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Technologies</span></h1>
        <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {
            mainData.map(data => <ExploreCard 
              key={data.id}
              data={data}
            ></ExploreCard>)
          }
        </div>
      </div>
    </section>
  )
}

export default Explore;

