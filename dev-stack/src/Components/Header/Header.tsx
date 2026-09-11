import image from '../../assets/banner-stack.png'

const Header = () => {

  return (
    
    <header>
        <div className="container mx-auto ">
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 py-10 md:py-14 lg:py-20">

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">

                <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#0F172A] leading-tight">
                Build Your Ideal <br />
                <span className="bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Development Stack
                </span>
                </h1>

                <p className="text-base sm:text-lg text-[#475569] my-6 leading-relaxed">
                Explore frontend, backend, database, and tooling options,
                <br className="hidden sm:block" />
                compare them side by side, and put together the stack that fits
                your
                <br className="hidden sm:block" />
                next project.
                </p>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-10">

                    <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white lg:px-6 md:px-4 py-3 rounded-lg font-semibold cursor-pointer">
                        Explore Technologies
                    </button>

                    <button className="lg:px-15 md:px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium cursor-pointer">
                        Learn More
                    </button>

                </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={image} alt="Development Stack"className="w-full max-w-sm md:max-w-md lg:max-w-xl"/>
            </div>

            </div>
        </div>
        </header>
  )
}

export default Header