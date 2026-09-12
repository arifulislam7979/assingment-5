import { use, useState } from "react";
import type DevDataType from "../../Type/devDataType";
import ExploreCard from "../ExploreCard/ExploreCard";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

export interface ExploreProps {
  devData: Promise<DevDataType[]>;
}

const Explore = ({ devData }: ExploreProps) => {
  const mainData = use(devData)
  const [addStack, setAddStack] = useState<DevDataType[]>([])
  

  const handleAddStack = (data: DevDataType) => {
    const addButtonExisting = addStack.some(stack => stack.id === data.id)
    if(addButtonExisting) {
      return
    }
    setAddStack([...addStack, data])
    toast.success('Added to Stack')
    
  }

  const handleRemoveSingle = (id: number) => {
    const stackRemove = addStack.filter(stack => stack.id !== id)
    setAddStack(stackRemove)
    toast.info('Remove Stack')
  }

  const handleRemoveAll = () => {
    setAddStack([]);
    toast.info('Remove All Stack')
  }

  return (
    <section className="py-8">
      <div className="container mx-auto">
        
        <h1 className="text-[36px] font-bold text-[#0F172A]">
          Explore the{" "}
          <span className="font-bold bg-linear-to-r from-pink-500 via-orange-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B] mb-12">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              mainData.map((data) => {
                const isAdded = addStack.some(stake => stake.id === data.id)

                return (
                  <ExploreCard
                    key={data.id} 
                    data={data} 
                    handleAddStack={handleAddStack}
                    isAdded={isAdded}
                  ></ExploreCard>
                )
              })
            }
          </div>

          {/* Side content */}
          {
            addStack.length === 0 ? (
              <div className="lg:col-span-1 sticky top-6">

                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
                  <p className="text-xs text-gray-400 mb-4">
                    No technologies selected yet.
                  </p>

                  <div className="border border-dashed border-gray-200 rounded-xl p-8 flex items-center justify-center text-center">
                    <span className="text-xs text-gray-400">
                      Your stack is empty.
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              
              <div className="lg:col-span-1 sticky top-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>
                  <p className="text-sm text-gray-400 mb-5">
                    {addStack.length} Technology Selected
                  </p>

                  {/* Stack List or Empty State */}
                  {(
                    <div className="space-y-3">
                      {/* Selected Items */}
                      <div className="space-y-2.5">
                        {addStack.map((stack) => (
                          <div
                            key={stack.id}
                            className="flex items-center justify-between border border-gray-200 rounded-xl p-3 bg-white">
                            <div className="flex items-center gap-3">
                              <img src={stack.icon} alt={stack.name} className="w-8 h-8 object-contain"/>
                              <div>
                                <h4 className="text-sm font-bold text-gray-900 leading-tight">
                                  {stack.name}
                                </h4>
                                <p className="text-[11px] text-gray-400 font-medium">
                                  {stack.category}
                                </p>
                              </div>
                            </div>

                            {/* Single Item Remove Button */}
                            <button
                              onClick={() => handleRemoveSingle(stack.id)}
                              className="text-gray-400 hover:text-gray-600 transition p-1 cursor-pointer"
                            >
                               <RxCross1 /> 
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Remove All Button */}
                      <button
                        onClick={handleRemoveAll}
                        className="w-full mt-4 border border-red-200 text-red-500 font-medium text-sm py-2.5 rounded-xl hover:bg-red-50 transition cursor-pointer"
                      >
                        Remove All
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          }

          
        </div>
        
      </div>
      
    </section>
  );
};

export default Explore;