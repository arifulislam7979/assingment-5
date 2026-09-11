import type DevDataType from "../../Type/devDataType";

export interface ExploreCardProps {
    data: DevDataType
}

const ExploreCard = ({ data }: ExploreCardProps) => {
    
    return (
        
        <section>
            <div >

                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">

                {/* Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                    <img src={data.icon} alt="icon" className="w-10 h-10 object-contain"/>

                    <button className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                        {data.badge}
                    </button>
                </div>

                {/* Name */}
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                    {data.name}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-5 min-h-[60px]">
                    {data.description}
                </p>

                {/* Category + Difficulty + Rating */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-3">

                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {data.category}
                    </span>

                    <span className="text-xs text-gray-500">
                    {data.difficulty}
                    </span>

                    <span className="text-xs text-gray-700">
                    <span className="text-yellow-500">★</span> {data.rating}
                    </span>

                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-[#080d1b] text-white text-sm py-2.5 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                    Add to Stack
                </button>

                </div>

            </div>
        </section>
    )
}

export default ExploreCard;