import type DevDataType from "../../Type/devDataType";
import { FaStar } from "react-icons/fa";

export interface ExploreCardProps {
  data: DevDataType;
  handleAddStack: (data: DevDataType) => void
}

const ExploreCard = ({ data, handleAddStack }: ExploreCardProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <img src={data.icon} alt={data.name} className="w-10 h-10 "/>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
            {data.badge}
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2">{data.name}</h2>

        <p className="text-sm text-gray-500 leading-5 min-h-15">
          {data.description}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-3">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {data.category}
          </span>
          <span className="text-xs text-gray-500 ">{data.difficulty}</span>
          <span className="text-xs text-gray-700 flex items-center gap-1">
            <span className="text-yellow-500"> <FaStar /></span> {data.rating}
          </span>
        </div>
      </div>

      <button onClick={()=>handleAddStack(data)} className="w-full mt-4 bg-[#080d1b] text-white text-sm py-2.5 rounded-lg hover:bg-gray-800 transition cursor-pointer font-medium">
        Add to Stack
      </button>
    </div>
  );
};

export default ExploreCard;